const express=require("express"),multer=require("multer"),crypto=require("crypto"),fs=require("fs"),path=require("path");
const app=express(),PORT=process.env.PORT||3000,ROOT=__dirname,DB=path.join(ROOT,"data/db.json"),UP=path.join(ROOT,"uploads");
fs.mkdirSync(path.dirname(DB),{recursive:true});fs.mkdirSync(UP,{recursive:true});
if(!fs.existsSync(DB))fs.writeFileSync(DB,JSON.stringify({users:[],sessions:{},orders:[],vehicles:[
{id:1,brand:"Audi",model:"A6 C8",engine:"40 TDI",hp:204,ecu:"MD1CP004"},
{id:2,brand:"Audi",model:"A4 B9",engine:"35 TDI",hp:163,ecu:"EDC17"},
{id:3,brand:"Volkswagen",model:"Passat B8",engine:"2.0 TDI",hp:150,ecu:"EDC17C74"},
{id:4,brand:"BMW",model:"320d G20",engine:"2.0d",hp:190,ecu:"MD1CS001"},
{id:5,brand:"Mercedes-Benz",model:"C220d W205",engine:"2.1 CDI",hp:170,ecu:"EDC17"},
{id:6,brand:"Skoda",model:"Octavia",engine:"2.0 TDI",hp:150,ecu:"Simos"}]},null,2));
const read=()=>JSON.parse(fs.readFileSync(DB)),write=d=>fs.writeFileSync(DB,JSON.stringify(d,null,2));
const id=p=>p+"-"+crypto.randomBytes(5).toString("hex");
function hash(p){let s=crypto.randomBytes(16).toString("hex");return s+":"+crypto.scryptSync(p,s,64).toString("hex")}
function verify(p,v){let [s,k]=v.split(":");return crypto.timingSafeEqual(Buffer.from(crypto.scryptSync(p,s,64).toString("hex")),Buffer.from(k))}
function me(req){let t=req.headers.cookie?.match(/hp_session=([^;]+)/)?.[1],d=read();return t&&d.sessions[t]?d.users.find(u=>u.id===d.sessions[t].userId):null}
function auth(req,res,next){let u=me(req);if(!u)return res.status(401).json({error:"Login required"});req.user=u;next()}
function login(res,uid){let d=read(),t=crypto.randomBytes(32).toString("hex");d.sessions[t]={userId:uid};write(d);res.setHeader("Set-Cookie",`hp_session=${t}; HttpOnly; Path=/; SameSite=Lax; Max-Age=604800`)}
app.use(express.json());app.use(express.urlencoded({extended:true}));app.use(express.static(ROOT));
app.get("/api/me",(req,res)=>{let u=me(req);if(!u)return res.json({user:null});let x={...u};delete x.password;res.json({user:x})});
app.post("/api/register",(req,res)=>{let {name,email,password}=req.body;if(!name||!email||!password||password.length<8)return res.status(400).json({error:"Fill all fields; password needs 8+ characters"});let d=read(),e=email.toLowerCase();if(d.users.some(u=>u.email===e))return res.status(409).json({error:"Email already registered"});let u={id:id("USR"),name,email:e,password:hash(password),credits:0,admin:false,createdAt:new Date().toISOString()};d.users.push(u);write(d);login(res,u.id);res.json({ok:true})});
app.post("/api/login",(req,res)=>{let d=read(),u=d.users.find(x=>x.email===String(req.body.email||"").toLowerCase());if(!u||!verify(req.body.password||"",u.password))return res.status(401).json({error:"Invalid login"});login(res,u.id);res.json({ok:true})});
app.post("/api/logout",(req,res)=>{let t=req.headers.cookie?.match(/hp_session=([^;]+)/)?.[1],d=read();if(t)delete d.sessions[t];write(d);res.setHeader("Set-Cookie","hp_session=; HttpOnly; Path=/; Max-Age=0");res.json({ok:true})});
// Live vehicle performance catalogue proxy. The browser never needs third-party credentials.
const TUNING_BASE=process.env.TUNING_GAINS_BASE||"https://firstecufiles.com/api/configurator";
async function tuningGet(endpoint,params,res){
  try{
    const u=new URL(TUNING_BASE+endpoint);
    for(const [k,v] of Object.entries(params||{})) if(v!==undefined&&v!==null&&String(v)!=="") u.searchParams.set(k,String(v));
    const r=await fetch(u,{headers:{"Accept":"application/json","User-Agent":"Habibi-Performance/1.0"}});
    const text=await r.text();
    if(!r.ok) return res.status(r.status).json({error:"Vehicle catalogue unavailable",status:r.status});
    res.type("application/json").send(text);
  }catch(e){res.status(502).json({error:"Vehicle catalogue unavailable"});}
}
app.get("/api/tuning/makes",(req,res)=>tuningGet("/makes",{},res));
app.get("/api/tuning/models",(req,res)=>tuningGet("/models",{make:req.query.make},res));
app.get("/api/tuning/generations",(req,res)=>tuningGet("/generations",{make:req.query.make,model:req.query.model},res));
app.get("/api/tuning/results",(req,res)=>tuningGet("/results",{make:req.query.make,model:req.query.model,generation:req.query.generation},res));
app.get("/api/vehicles",(req,res)=>res.json(read().vehicles));
app.get("/api/orders",auth,(req,res)=>res.json(read().orders.filter(o=>o.userId===req.user.id||req.user.admin)));
const upload=multer({dest:UP,limits:{fileSize:50*1024*1024}});
app.post("/api/orders",auth,upload.single("original"),(req,res)=>{let d=read(),v=d.vehicles.find(x=>String(x.id)===String(req.body.vehicleId)),u=d.users.find(x=>x.id===req.user.id),cost=+req.body.cost||25;if(!v)return res.status(400).json({error:"Vehicle not found"});if(u.credits<cost)return res.status(400).json({error:"Not enough credits"});u.credits-=cost;let o={id:id("HP"),userId:u.id,vehicle:`${v.brand} ${v.model}`,engine:v.engine,ecu:v.ecu,service:req.body.service||"Stage 1",cost,status:"PROCESSING",original:req.file?.filename||null,processed:null,createdAt:new Date().toISOString()};d.orders.push(o);write(d);res.json({ok:true,order:o})});
app.get("/api/download/:id",auth,(req,res)=>{let o=read().orders.find(x=>x.id===req.params.id);if(!o||o.userId!==req.user.id||!o.processed)return res.status(404).send("File unavailable");res.download(path.join(UP,o.processed),`${o.id}-Habibi-Performance.bin`)});
app.get("*",(req,res)=>res.sendFile(path.join(ROOT,"index.html")));
app.listen(PORT,()=>console.log("Habibi Performance: http://localhost:"+PORT));
