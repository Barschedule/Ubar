var DEFAULT_PIN=“1234”;
var SUPER_ADMIN=“Fabinho”;
var INIT_INV=[
{id:1,name:“Jameson”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:2,name:“Jim Beam”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:3,name:“Monkey’s Shoulder”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:4,name:“Wild Turkey”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:5,name:“Grant’s Triple Wood”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:6,name:“Blended Single Malt Scotch”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:7,name:“Crown Royal Woods”,category:“Whisky”,unit:“750ml”,stock:1,backup:1,par:1,emoji:“🥃”,distId:1},
{id:8,name:“Crown Royal Apple”,category:“Whisky”,unit:“750ml”,stock:1,backup:1,par:1,emoji:“🥃”,distId:1},
{id:9,name:“Crown Royal Beach”,category:“Whisky”,unit:“750ml”,stock:1,backup:1,par:1,emoji:“🥃”,distId:1},
{id:10,name:“Makers Mark”,category:“Whisky”,unit:“750ml”,stock:3,backup:3,par:3,emoji:“🥃”,distId:1},
{id:11,name:“Basil Hayden”,category:“Whisky”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🥃”,distId:1},
{id:12,name:“Fireball”,category:“Licores”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🔥”,distId:1},
{id:13,name:“Hennessy”,category:“Cognac”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🍷”,distId:1},
{id:14,name:“Martell Cordon Bleu”,category:“Cognac”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🍷”,distId:1},
{id:15,name:“House Vodka”,category:“Vodka”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍸”,distId:1},
{id:16,name:“Grey Goose”,category:“Vodka”,unit:“750ml”,stock:1,backup:1,par:1,emoji:“🍸”,distId:1},
{id:17,name:“Tito’s”,category:“Vodka”,unit:“750ml”,stock:4,backup:4,par:4,emoji:“🍸”,distId:1},
{id:18,name:“New Amsterdam Vodka”,category:“Vodka”,unit:“750ml”,stock:3,backup:3,par:3,emoji:“🍸”,distId:1},
{id:19,name:“Kettle One”,category:“Vodka”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🍸”,distId:1},
{id:20,name:“Watermelon Basil Vodka”,category:“Vodka”,unit:“750ml”,stock:1,backup:1,par:1,emoji:“🍸”,distId:1},
{id:21,name:“Bombay Sapphire”,category:“Gin”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🫙”,distId:1},
{id:22,name:“Hendricks”,category:“Gin”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🫙”,distId:1},
{id:23,name:“House Rum”,category:“Ron”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍹”,distId:2},
{id:24,name:“Malibu Pink”,category:“Licores”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🌸”,distId:2},
{id:25,name:“House Tequila”,category:“Tequila”,unit:“case”,stock:1,backup:1,par:1,emoji:“🌵”,distId:2},
{id:26,name:“Julio Blanco”,category:“Tequila”,unit:“750ml”,stock:2,backup:2,par:2,emoji:“🌵”,distId:2},
{id:27,name:“Copper Ridge Cabernet”,category:“Vino”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍷”,distId:3},
{id:28,name:“Chateau Ste Michelle Riesling”,category:“Vino”,unit:“case”,stock:1,backup:1,par:1,emoji:“🥂”,distId:3},
{id:29,name:“Chateau Ste Michelle Cabernet”,category:“Vino”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍷”,distId:3},
{id:30,name:“Pinot Noir”,category:“Vino”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍷”,distId:3},
{id:31,name:“Sauvignon Blanc”,category:“Vino”,unit:“case”,stock:1,backup:1,par:1,emoji:“🥂”,distId:3},
{id:32,name:“Grenadine”,category:“Jugos”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍒”,distId:5},
{id:33,name:“Margarita Mix”,category:“Jugos”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍋”,distId:5},
{id:34,name:“Bloody Mary Mix”,category:“Jugos”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍅”,distId:5},
{id:35,name:“Jugo de Naranja”,category:“Jugos”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍊”,distId:5},
{id:36,name:“Jugo de Cranberry”,category:“Jugos”,unit:“case”,stock:2,backup:2,par:2,emoji:“🫐”,distId:5},
{id:37,name:“Bud Light”,category:“Cerveza”,unit:“case”,stock:3,backup:3,par:3,emoji:“🍺”,distId:4},
{id:38,name:“Budweiser”,category:“Cerveza”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍺”,distId:4},
{id:39,name:“Coors Light”,category:“Cerveza”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍺”,distId:4},
{id:40,name:“Miller Lite”,category:“Cerveza”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍺”,distId:4},
{id:41,name:“Corona”,category:“Cerveza”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍺”,distId:4},
{id:42,name:“Modelo Especial”,category:“Cerveza”,unit:“case”,stock:2,backup:2,par:2,emoji:“🍺”,distId:4},
{id:43,name:“Heineken”,category:“Cerveza”,unit:“case”,stock:1,backup:1,par:1,emoji:“🍺”,distId:4},
];
var INIT_DISTS=[
{id:1,name:“Southern Glazer’s”,short:“SGW”,phone:“816-555-0101”,email:“orders@sgws.com”,rep:“Mike Johnson”,repPhone:“816-555-0201”,categories:[“Whisky”,“Cognac”,“Vodka”,“Gin”,“Licores”],color:”#c8964e”,notes:“Pedido mínimo $500”},
{id:2,name:“Charmer Sunbelt”,short:“CS”,phone:“816-555-0102”,email:“orders@charmer.com”,rep:“Sarah Williams”,repPhone:“816-555-0202”,categories:[“Ron”,“Tequila”],color:”#6ab04c”,notes:“Entrega martes y viernes”},
{id:3,name:“Republic National”,short:“RN”,phone:“816-555-0103”,email:“orders@rndc.com”,rep:“David Chen”,repPhone:“816-555-0203”,categories:[“Vino”],color:”#eb4d4b”,notes:“Pedido antes del miércoles”},
{id:4,name:“Anheuser-Busch”,short:“AB”,phone:“816-555-0104”,email:“orders@abinbev.com”,rep:“Tom Rodriguez”,repPhone:“816-555-0204”,categories:[“Cerveza”],color:”#f0932b”,notes:“Entrega lunes”},
{id:5,name:“Sysco”,short:“SYS”,phone:“816-555-0105”,email:“orders@sysco.com”,rep:“Lisa Park”,repPhone:“816-555-0205”,categories:[“Jugos”,“Mixers”],color:”#686de0”,notes:“Pedido mínimo $200”},
];

function lsGet(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function dateNow(){return new Date().toLocaleDateString(“en-US”);}
function tsNow(){return Date.now();}
function upsertUser(name){if(!name)return;var u=lsGet(“lp:active_users”,{});u[name]={name:name,lastSeen:tsNow()};lsSet(“lp:active_users”,u);}
function appendLog(e){var logs=lsGet(“lp:logs”,[]);logs.unshift(Object.assign({},e,{ts:tsNow(),date:dateNow()}));if(logs.length>500)logs.length=500;lsSet(“lp:logs”,logs);}

var bg={minHeight:“100vh”,background:“linear-gradient(135deg,#06080a,#0d1117,#06080a)”,display:“flex”,alignItems:“center”,justifyContent:“center”,fontFamily:“Georgia,serif”};
var card={background:“rgba(255,255,255,.03)”,border:“1px solid #1a2830”,borderRadius:10,padding:14,marginBottom:10};
var inputD={background:“rgba(255,255,255,.04)”,border:“1px solid #1e2d3d”,borderRadius:7,color:”#d0c8b0”,padding:“10px 12px”,width:“100%”,boxSizing:“border-box”};
function btn(bg,color){return{background:bg,color:color||”#f0ead6”,border:“none”,borderRadius:6,padding:“8px 14px”,cursor:“pointer”,fontSize:12,fontWeight:600,letterSpacing:1};}
function badge(c){return{background:c+“22”,color:c,border:“1px solid “+c+“44”,borderRadius:12,padding:“2px 8px”,fontSize:10,fontWeight:700,letterSpacing:1};}

var ce=React.createElement;

function Login(props){
var pin=props.pin,adminUser=props.adminUser,staff=props.staff,onLogin=props.onLogin;
var s1=useState(””),name=s1[0],setName=s1[1];
var s2=useState(””),pw=s2[0],setPw=s2[1];
var s3=useState(“user”),mode=s3[0],setMode=s3[1];
var s4=useState(””),err=s4[0],setErr=s4[1];
var hasStaff=staff&&staff.length>0;
function go(){
setErr(””);
if(mode===“admin”){
if(pw!==pin){setErr(“PIN incorrecto”);return;}
var ln=adminUser||“Admin”;
var isSuper=ln.toLowerCase()===SUPER_ADMIN.toLowerCase();
onLogin(ln,true,isSuper);
} else {
var n=name.trim();
if(!n){setErr(“Escribe tu nombre”);return;}
if(!hasStaff){setErr(“Acceso bloqueado. Contacta al administrador.”);return;}
var match=staff.find(function(s){return s.toLowerCase()===n.toLowerCase();});
if(!match){setErr(“Nombre no autorizado.”);return;}
appendLog({user:match,type:“login”,detail:“Accedió al inventario”,item:”–”});
upsertUser(match);
onLogin(match,false,false);
}
}
return ce(“div”,{style:bg},
ce(“div”,{style:{width:320,background:“rgba(255,255,255,.03)”,border:“1px solid #1e2830”,borderRadius:18,padding:“36px 28px”,boxShadow:“0 30px 80px rgba(0,0,0,.7)”}},
ce(“div”,{style:{textAlign:“center”,marginBottom:24}},
ce(“div”,{style:{fontSize:38,marginBottom:6}},“🥃”),
ce(“div”,{style:{fontSize:20,letterSpacing:3,color:”#f0e6d0”}},“LicorPro”),
ce(“div”,{style:{fontSize:10,letterSpacing:4,color:”#3a5060”,textTransform:“uppercase”,marginTop:4}},“Inventario Embassy Suites”),
),
ce(“div”,{style:{display:“flex”,background:“rgba(0,0,0,.3)”,borderRadius:8,padding:3,marginBottom:18}},
[“user”,“admin”].map(function(m){
return ce(“button”,{key:m,onClick:function(){setMode(m);setErr(””);setPw(””);setName(””);},style:{flex:1,background:mode===m?”#1e3040”:“none”,border:mode===m?“1px solid #2a4a60”:“1px solid transparent”,borderRadius:6,padding:“7px 0”,color:mode===m?”#c8964e”:”#4a6a7a”,fontSize:11,letterSpacing:2,cursor:“pointer”,textTransform:“uppercase”}},m===“user”?“Empleado”:“Admin”);
})
),
mode===“user”
? ce(“div”,null,
ce(“div”,{style:{fontSize:9,color:”#3a5060”,letterSpacing:2,marginBottom:5,textTransform:“uppercase”}},“Tu nombre”),
ce(“input”,{value:name,onChange:function(e){setName(e.target.value);setErr(””);},onKeyDown:function(e){if(e.key===“Enter”)go();},type:“text”,placeholder:“Ej: Morgan”,style:Object.assign({},inputD,{marginBottom:14}),autoFocus:true})
)
: ce(“div”,null,
ce(“div”,{style:{fontSize:9,color:”#3a5060”,letterSpacing:2,marginBottom:5,textTransform:“uppercase”}},“PIN”),
ce(“input”,{value:pw,onChange:function(e){setPw(e.target.value);setErr(””);},onKeyDown:function(e){if(e.key===“Enter”)go();},type:“password”,placeholder:”••••”,style:Object.assign({},inputD,{marginBottom:14,letterSpacing:6}),autoFocus:true})
),
err&&ce(“div”,{style:{color:”#ff6666”,fontSize:11,marginBottom:10,textAlign:“center”}},err),
ce(“button”,{onClick:go,style:Object.assign({},btn(”#c8964e”,”#06080a”),{width:“100%”,padding:“11px 0”,fontSize:12,letterSpacing:3})},“Acceder →”),
hasStaff&&mode===“user”&&ce(“div”,{style:{marginTop:12,fontSize:9,color:”#2a3a4a”,textAlign:“center”}},“Autorizados: “+staff.join(”, “)),
)
);
}

function App(){
var s1=useState(lsGet(“lp:session_user”,null)),user=s1[0],setUser=s1[1];
var s2=useState(lsGet(“lp:session_admin”,false)),isAdmin=s2[0],setIsAdmin=s2[1];
var s3=useState(lsGet(“lp:session_super”,false)),isSuper=s3[0],setIsSuper=s3[1];
var s4=useState(function(){return lsGet(“lp:pin”,DEFAULT_PIN);}),pin=s4[0],setPin=s4[1];
var s5=useState(function(){return lsGet(“lp:adminuser”,SUPER_ADMIN);}),adminUser=s5[0],setAdminUser=s5[1];
var s6=useState(function(){return lsGet(“lp:staff”,[]);}),staff=s6[0],setStaff=s6[1];

useEffect(function(){
var iv=setInterval(function(){
setPin(lsGet(“lp:pin”,DEFAULT_PIN));
setAdminUser(lsGet(“lp:adminuser”,SUPER_ADMIN));
setStaff(lsGet(“lp:staff”,[]));
},5000);
return function(){clearInterval(iv);};
},[]);

function handleLogin(name,admin,superAdmin){
setUser(name);setIsAdmin(admin);setIsSuper(superAdmin);
lsSet(“lp:session_user”,name);lsSet(“lp:session_admin”,admin);lsSet(“lp:session_super”,superAdmin);
}
function handleLogout(){
setUser(null);setIsAdmin(false);setIsSuper(false);
lsSet(“lp:session_user”,null);lsSet(“lp:session_admin”,false);lsSet(“lp:session_super”,false);
}

if(!user) return ce(Login,{pin:pin,adminUser:adminUser,staff:staff,onLogin:handleLogin});
return ce(InvApp,{user:user,isAdmin:isAdmin,isSuper:isSuper,onLogout:handleLogout});
}

function InvApp(props){
var user=props.user,isAdmin=props.isAdmin,isSuper=props.isSuper,onLogout=props.onLogout;
var s1=useState(null),inv=s1[0],setInvState=s1[1];
var s2=useState(null),dists=s2[0],setDistsState=s2[1];
var s3=useState(“inventory”),activeTab=s3[0],setActiveTab=s3[1];
var s4=useState(“Todos”),filter=s4[0],setFilter=s4[1];
var s5=useState(””),search=s5[0],setSearch=s5[1];
var s6=useState(null),notif=s6[0],setNotif=s6[1];
var s7=useState(null),retireItem=s7[0],setRetireItem=s7[1];
var s8=useState(“1”),retireQty=s8[0],setRetireQty=s8[1];
var s9=useState(””),retireReason=s9[0],setRetireReason=s9[1];
var s10=useState(null),histItem=s10[0],setHistItem=s10[1];
var s11=useState(null),editId=s11[0],setEditId=s11[1];
var s12=useState({}),editVals=s12[0],setEditVals=s12[1];
var s13=useState(false),showAdd=s13[0],setShowAdd=s13[1];
var s14=useState({name:””,category:“Cerveza”,unit:“case”,stock:0,backup:0,par:2,distId:1}),newItem=s14[0],setNewItem=s14[1];
var hbRef=useRef(null);

useEffect(function(){
var inv_=lsGet(“lp:inventory”,null)||INIT_INV;
var dist_=lsGet(“lp:distributors”,null)||INIT_DISTS;
if(!lsGet(“lp:inventory”,null))lsSet(“lp:inventory”,inv_);
if(!lsGet(“lp:distributors”,null))lsSet(“lp:distributors”,dist_);
setInvState(inv_);setDistsState(dist_);
upsertUser(user);
hbRef.current=setInterval(function(){upsertUser(user);},15000);
return function(){clearInterval(hbRef.current);};
},[user]);

function toast(msg,type){setNotif({msg:msg,type:type||“ok”});setTimeout(function(){setNotif(null);},3000);}
function saveInv(next){setInvState(next);lsSet(“lp:inventory”,next);}
function saveDists(next){setDistsState(next);lsSet(“lp:distributors”,next);}

function adjStock(id,d){
var it=inv.find(function(i){return i.id===id;});
var ns=Math.max(0,it.stock+d);
var hist=it.history?[].concat(it.history):[];
if(ns===0&&it.stock>0)hist.push({type:“finished”,date:dateNow(),ts:tsNow(),user:user,stock:0});
if(it.stock===0&&ns>0)hist.push({type:“arrived”,date:dateNow(),ts:tsNow(),user:user,stock:ns});
var nx=inv.map(function(i){return i.id===id?Object.assign({},i,{stock:ns,history:hist}):i;});
saveInv(nx);
appendLog({user:user,type:“stock”,item:it.name,detail:(d>0?”+”:””)+d+” → stock:”+ns});
if(ns===0)toast(“⚠️ “+it.name+” se agotó”,“err”);
else if(ns<=it.backup)toast(“📦 “+it.name+”: stock bajo (”+ns+”)”,“warn”);
}

function markRetired(id,qty,reason){
var it=inv.find(function(i){return i.id===id;});
var ns=Math.max(0,it.stock-qty);
var hist=it.history?[].concat(it.history):[];
hist.push({type:“retired”,date:dateNow(),ts:tsNow(),user:user,qty:qty,reason:reason||undefined,stock:ns});
if(ns===0)hist.push({type:“finished”,date:dateNow(),ts:tsNow(),user:user,stock:0});
var nx=inv.map(function(i){return i.id===id?Object.assign({},i,{stock:ns,history:hist}):i;});
saveInv(nx);
appendLog({user:user,type:“stock”,item:it.name,detail:“Retirado: “+qty+” → stock:”+ns+(reason?” (”+reason+”)”:””)});
toast(“🗑️ “+it.name+”: “+qty+” retirada”+(qty!==1?“s”:””),“err”);
setRetireItem(null);setRetireQty(“1”);setRetireReason(””);
}

function markArrived(id){
var it=inv.find(function(i){return i.id===id;});
var hist=it.history?[].concat(it.history):[];
hist.push({type:“arrived”,date:dateNow(),ts:tsNow(),user:user,stock:it.stock});
var nx=inv.map(function(i){return i.id===id?Object.assign({},i,{history:hist}):i;});
saveInv(nx);
toast(“📦 Llegada de “+it.name+” registrada”);
}

if(!inv)return ce(“div”,{style:{color:”#c8964e”,textAlign:“center”,padding:40,fontFamily:“Georgia,serif”}},“Cargando…”);

var cats=[“Todos”].concat([].concat.apply([],[]).concat(inv.map(function(i){return i.category;})).filter(function(v,i,a){return a.indexOf(v)===i;}));
var filtered=inv.filter(function(i){
return(filter===“Todos”||i.category===filter)&&i.name.toLowerCase().indexOf(search.toLowerCase())>=0;
});
var criticals=inv.filter(function(i){return i.stock<=i.backup;});
var tabs=[{id:“inventory”,label:“Inventario”,emoji:“📦”},{id:“orders”,label:“Pedidos”,emoji:“📋”},{id:“dists”,label:“Proveedores”,emoji:“🚚”},{id:“logs”,label:“Registro”,emoji:“📝”}];
if(isAdmin)tabs.push({id:“admin”,label:“Admin”,emoji:“⚙️”});

return ce(“div”,{style:{minHeight:“100vh”,background:”#06080a”,fontFamily:“Georgia,serif”,color:”#c0b898”}},
notif&&ce(“div”,{style:{position:“fixed”,top:16,left:“50%”,transform:“translateX(-50%)”,zIndex:9999,background:notif.type===“err”?“rgba(255,68,68,.9)”:notif.type===“warn”?“rgba(200,150,78,.9)”:“rgba(44,204,136,.9)”,color:”#fff”,padding:“10px 20px”,borderRadius:20,fontSize:13,fontWeight:600,boxShadow:“0 4px 20px rgba(0,0,0,.5)”,maxWidth:320,textAlign:“center”}},notif.msg),
ce(“div”,{style:{background:“rgba(0,0,0,.6)”,borderBottom:“1px solid #1a2830”,padding:“12px 16px”,display:“flex”,alignItems:“center”,justifyContent:“space-between”,position:“sticky”,top:0,zIndex:100}},
ce(“div”,{style:{display:“flex”,alignItems:“center”,gap:10}},
ce(“div”,{style:{fontSize:22}},“🥃”),
ce(“div”,null,
ce(“div”,{style:{fontSize:13,color:”#c8964e”,letterSpacing:2,fontWeight:600}},“LICORPRO”),
ce(“div”,{style:{fontSize:9,color:”#3a5060”,letterSpacing:1}},user+(isAdmin?” · Admin”:””)),
),
),
ce(“div”,{style:{display:“flex”,gap:8,alignItems:“center”}},
criticals.length>0&&ce(“div”,{style:{background:“rgba(255,68,68,.15)”,border:“1px solid rgba(255,68,68,.3)”,borderRadius:20,padding:“3px 10px”,fontSize:10,color:”#ff6666”,fontWeight:700}},“⚠️ “+criticals.length+” bajo”),
ce(“button”,{onClick:onLogout,style:btn(”#1a2830”,”#4a6070”)},“Salir”),
),
),
ce(“div”,{style:{display:“flex”,background:“rgba(0,0,0,.4)”,borderBottom:“1px solid #1a2830”,overflowX:“auto”}},
tabs.map(function(t){
return ce(“button”,{key:t.id,onClick:function(){setActiveTab(t.id);},style:{flex:1,minWidth:60,padding:“10px 4px”,background:activeTab===t.id?“rgba(200,150,78,.1)”:“none”,border:“none”,borderBottom:activeTab===t.id?“2px solid #c8964e”:“2px solid transparent”,color:activeTab===t.id?”#c8964e”:”#3a5060”,fontSize:9,letterSpacing:1,cursor:“pointer”,textTransform:“uppercase”,display:“flex”,flexDirection:“column”,alignItems:“center”,gap:2}},
ce(“span”,{style:{fontSize:16}},t.emoji),t.label
);
})
),
ce(“div”,{style:{padding:14,paddingBottom:80}},
activeTab===“inventory”&&renderInv(),
activeTab===“orders”&&renderOrders(),
activeTab===“dists”&&renderDists(),
activeTab===“logs”&&renderLogs(),
activeTab===“admin”&&isAdmin&&ce(AdminPanel,{isSuper:isSuper,currentUser:user,toast:toast}),
),
retireItem&&ce(“div”,{style:{position:“fixed”,inset:0,background:“rgba(0,0,0,.8)”,display:“flex”,alignItems:“center”,justifyContent:“center”,zIndex:200}},
ce(“div”,{style:{background:”#0d1520”,border:“1px solid #2a3a4a”,borderRadius:14,padding:24,width:300}},
ce(“div”,{style:{fontSize:14,color:”#c8964e”,marginBottom:14,fontWeight:600}},“Retirar: “+retireItem.name),
ce(“div”,{style:{fontSize:10,color:”#4a6070”,marginBottom:5,letterSpacing:1,textTransform:“uppercase”}},“Cantidad”),
ce(“input”,{type:“number”,value:retireQty,onChange:function(e){setRetireQty(e.target.value);},min:1,max:retireItem.stock,style:Object.assign({},inputD,{marginBottom:12,fontSize:18,textAlign:“center”})}),
ce(“div”,{style:{fontSize:10,color:”#4a6070”,marginBottom:5,letterSpacing:1,textTransform:“uppercase”}},“Razón (opcional)”),
ce(“input”,{type:“text”,value:retireReason,onChange:function(e){setRetireReason(e.target.value);},placeholder:“Roto, vencido…”,style:Object.assign({},inputD,{marginBottom:16})}),
ce(“div”,{style:{display:“flex”,gap:8}},
ce(“button”,{onClick:function(){setRetireItem(null);setRetireQty(“1”);setRetireReason(””);},style:Object.assign({},btn(”#1a2830”,”#4a6070”),{flex:1})},“Cancelar”),
ce(“button”,{onClick:function(){markRetired(retireItem.id,parseInt(retireQty)||1,retireReason);},style:Object.assign({},btn(”#c8964e”,”#06080a”),{flex:1})},“Confirmar”),
),
),
),
histItem&&ce(“div”,{style:{position:“fixed”,inset:0,background:“rgba(0,0,0,.85)”,display:“flex”,alignItems:“center”,justifyContent:“center”,zIndex:200}},
ce(“div”,{style:{background:”#0d1520”,border:“1px solid #2a3a4a”,borderRadius:14,padding:20,width:320,maxHeight:“80vh”,overflowY:“auto”}},
ce(“div”,{style:{display:“flex”,justifyContent:“space-between”,alignItems:“center”,marginBottom:14}},
ce(“div”,{style:{fontSize:13,color:”#c8964e”,fontWeight:600}},histItem.name),
ce(“button”,{onClick:function(){setHistItem(null);},style:btn(”#1a2830”,”#c8964e”)},“✕”),
),
(!histItem.history||histItem.history.length===0)
? ce(“div”,{style:{color:”#3a5060”,fontSize:12,textAlign:“center”,padding:20}},“Sin historial aún”)
: [].concat(histItem.history).reverse().map(function(h,i){
return ce(“div”,{key:i,style:{borderBottom:“1px solid #1a2830”,padding:“8px 0”,fontSize:11}},
ce(“div”,{style:{display:“flex”,justifyContent:“space-between”}},
ce(“span”,{style:{color:h.type===“arrived”?”#44cc88”:h.type===“finished”?”#ff6666”:h.type===“retired”?”#f0932b”:”#c8964e”}},
h.type===“arrived”?“📦 Llegada”:h.type===“finished”?“⚠️ Agotado”:h.type===“retired”?“🗑️ Retirado”:“📝 Mov.”
),
ce(“span”,{style:{color:”#3a5060”}},h.date||””),
),
ce(“div”,{style:{color:”#4a6070”,marginTop:2}},
(h.user?“Por: “+h.user:””)+(h.qty?” · “+h.qty+” unid”:””)+(h.reason?” · “+h.reason:””)+(h.stock!==undefined?” · Stock: “+h.stock:””)
),
);
}),
),
),
);

function renderInv(){
return ce(“div”,null,
ce(“div”,{style:{marginBottom:14}},
ce(“input”,{value:search,onChange:function(e){setSearch(e.target.value);},placeholder:“🔍 Buscar…”,style:Object.assign({},inputD,{marginBottom:10})}),
ce(“div”,{style:{display:“flex”,gap:6,overflowX:“auto”,paddingBottom:4}},
cats.map(function(c){return ce(“button”,{key:c,onClick:function(){setFilter(c);},style:Object.assign({},btn(filter===c?”#c8964e”:”#1a2830”,filter===c?”#06080a”:”#4a6070”),{whiteSpace:“nowrap”,fontSize:10,padding:“5px 10px”})},c);})
),
),
isAdmin&&ce(“div”,{style:{marginBottom:14}},
ce(“button”,{onClick:function(){setShowAdd(!showAdd);},style:Object.assign({},btn(”#1a3020”,”#44cc88”),{width:“100%”,fontSize:11})},showAdd?“✕ Cancelar”:”+ Agregar Producto”),
showAdd&&ce(“div”,{style:Object.assign({},card,{marginTop:10})},
ce(“input”,{value:newItem.name,onChange:function(e){setNewItem(Object.assign({},newItem,{name:e.target.value}));},placeholder:“Nombre del producto”,style:Object.assign({},inputD,{marginBottom:8})}),
ce(“select”,{value:newItem.category,onChange:function(e){setNewItem(Object.assign({},newItem,{category:e.target.value}));},style:Object.assign({},inputD,{marginBottom:8})},
[“Whisky”,“Cognac”,“Vodka”,“Gin”,“Ron”,“Tequila”,“Vino”,“Cerveza”,“Jugos”,“Licores”].map(function(o){return ce(“option”,{key:o,value:o},o);})
),
ce(“div”,{style:{display:“grid”,gridTemplateColumns:“1fr 1fr 1fr”,gap:8,marginBottom:10}},
[“stock”,“backup”,“par”].map(function(f){
return ce(“div”,{key:f},
ce(“div”,{style:{fontSize:9,color:”#4a6070”,marginBottom:4,textTransform:“uppercase”}},f),
ce(“input”,{type:“number”,value:newItem[f],onChange:function(e){var u=Object.assign({},newItem);u[f]=parseInt(e.target.value)||0;setNewItem(u);},style:Object.assign({},inputD,{textAlign:“center”})})
);
})
),
ce(“button”,{onClick:function(){
if(!newItem.name.trim())return;
var id=Math.max.apply(null,inv.map(function(i){return i.id;}).concat([0]))+1;
var item=Object.assign({},newItem,{id:id,emoji:“📦”,history:[]});
saveInv([].concat(inv,[item]));
appendLog({user:user,type:“add”,item:newItem.name,detail:“Producto agregado”});
setNewItem({name:””,category:“Cerveza”,unit:“case”,stock:0,backup:0,par:2,distId:1});
setShowAdd(false);
toast(“✅ “+newItem.name+” agregado”);
},style:Object.assign({},btn(”#c8964e”,”#06080a”),{width:“100%”})},“Guardar”),
),
),
filtered.map(function(item){
var isCrit=item.stock<=item.backup;
var isEdit=editId===item.id;
return ce(“div”,{key:item.id,style:Object.assign({},card,{borderLeft:isCrit?“3px solid #ff4444”:“3px solid transparent”})},
ce(“div”,{style:{display:“flex”,justifyContent:“space-between”,alignItems:“flex-start”}},
ce(“div”,{style:{flex:1}},
ce(“div”,{style:{display:“flex”,alignItems:“center”,gap:8,marginBottom:6}},
ce(“span”,{style:{fontSize:20}},item.emoji||“📦”),
ce(“div”,null,
ce(“div”,{style:{fontSize:13,color:”#d0c0a0”,fontWeight:600}},item.name),
ce(“div”,{style:{fontSize:10,color:”#3a5060”}},item.category+” · “+item.unit),
),
),
ce(“div”,{style:{display:“flex”,gap:6,flexWrap:“wrap”,marginBottom:8}},
ce(“span”,{style:badge(isCrit?”#ff4444”:”#44cc88”)},“Stock: “+item.stock),
ce(“span”,{style:badge(”#c8964e”)},“Par: “+item.par),
ce(“span”,{style:badge(”#4a6070”)},“Backup: “+item.backup),
isCrit&&ce(“span”,{style:badge(”#ff4444”)},“⚠️ BAJO”),
),
),
ce(“div”,{style:{display:“flex”,flexDirection:“column”,alignItems:“center”,gap:4}},
ce(“button”,{onClick:function(){adjStock(item.id,1);},style:Object.assign({},btn(”#1a3020”,”#44cc88”),{padding:“6px 12px”,fontSize:16})},”+”),
ce(“div”,{style:{fontSize:22,fontWeight:700,color:isCrit?”#ff6666”:”#c8964e”,minWidth:30,textAlign:“center”}},item.stock),
ce(“button”,{onClick:function(){adjStock(item.id,-1);},disabled:item.stock<=0,style:Object.assign({},btn(item.stock<=0?”#111”:”#3a1010”,item.stock<=0?”#333”:”#ff6666”),{padding:“6px 12px”,fontSize:16})},“−”),
),
),
ce(“div”,{style:{display:“flex”,gap:6,flexWrap:“wrap”}},
ce(“button”,{onClick:function(){setHistItem(item);},style:Object.assign({},btn(”#1a2830”,”#4a8090”),{fontSize:9,padding:“4px 8px”})},“📊 Historial”),
ce(“button”,{onClick:function(){markArrived(item.id);},style:Object.assign({},btn(”#1a3020”,”#44cc88”),{fontSize:9,padding:“4px 8px”})},“📦 Llegada”),
ce(“button”,{onClick:function(){setRetireItem(item);},style:Object.assign({},btn(”#2a1810”,”#f0932b”),{fontSize:9,padding:“4px 8px”})},“🗑️ Retirar”),
isAdmin&&ce(“button”,{onClick:function(){setEditId(isEdit?null:item.id);setEditVals({stock:item.stock,backup:item.backup,par:item.par});},style:Object.assign({},btn(”#1a1a2a”,”#6a7a9a”),{fontSize:9,padding:“4px 8px”})},isEdit?“✕”:“✏️ Editar”),
),
isEdit&&ce(“div”,{style:{marginTop:12,paddingTop:12,borderTop:“1px solid #1a2830”}},
ce(“div”,{style:{display:“grid”,gridTemplateColumns:“1fr 1fr 1fr”,gap:8,marginBottom:10}},
[“stock”,“backup”,“par”].map(function(f){
return ce(“div”,{key:f},
ce(“div”,{style:{fontSize:9,color:”#4a6070”,marginBottom:4,textTransform:“uppercase”}},f),
ce(“input”,{type:“number”,value:editVals[f]!==undefined?editVals[f]:item[f],onChange:function(e){var u=Object.assign({},editVals);u[f]=parseInt(e.target.value)||0;setEditVals(u);},style:Object.assign({},inputD,{textAlign:“center”})})
);
})
),
ce(“button”,{onClick:function(){
var nx=inv.map(function(i){return i.id===item.id?Object.assign({},i,editVals):i;});
saveInv(nx);
appendLog({user:user,type:“edit”,item:item.name,detail:“Editado”});
setEditId(null);
toast(“✅ “+item.name+” actualizado”);
},style:Object.assign({},btn(”#c8964e”,”#06080a”),{width:“100%”})},“💾 Guardar”),
),
);
}),
);
}

function renderOrders(){
var byDist={};
inv.filter(function(i){return i.stock<i.par;}).forEach(function(i){
if(!byDist[i.distId])byDist[i.distId]=[];
byDist[i.distId].push(i);
});
var keys=Object.keys(byDist);
return ce(“div”,null,
ce(“div”,{style:{fontSize:13,color:”#c8964e”,letterSpacing:2,marginBottom:16,textTransform:“uppercase”}},“📋 Pedidos Sugeridos”),
keys.length===0
? ce(“div”,{style:Object.assign({},card,{textAlign:“center”,padding:30,color:”#3a5060”})},“✅ Todo al nivel de par”)
: keys.map(function(distId){
var items=byDist[distId];
var dist=dists&&dists.find(function(d){return d.id===parseInt(distId);});
return ce(“div”,{key:distId,style:Object.assign({},card,{borderLeft:“3px solid “+(dist?dist.color:”#c8964e”)})},
ce(“div”,{style:{marginBottom:10}},
ce(“div”,{style:{fontSize:13,color:”#d0c0a0”,fontWeight:600}},dist?dist.name:“Dist. “+distId),
dist&&ce(“div”,{style:{fontSize:10,color:”#3a5060”}},dist.rep+” · “+dist.phone),
),
items.map(function(i){
return ce(“div”,{key:i.id,style:{display:“flex”,justifyContent:“space-between”,padding:“6px 0”,borderBottom:“1px solid #1a2830”}},
ce(“span”,{style:{fontSize:12,color:”#b0a890”}},i.emoji+” “+i.name),
ce(“div”,{style:{display:“flex”,gap:8}},
ce(“span”,{style:{color:”#ff6666”,fontSize:11}},“Stock: “+i.stock),
ce(“span”,{style:{color:”#44cc88”,fontSize:11,fontWeight:700}},“Pedir: “+(i.par-i.stock)),
),
);
}),
dist&&ce(“div”,{style:{marginTop:8,fontSize:10,color:”#4a6070”}},“📧 “+dist.email),
);
}),
);
}

function renderDists(){
return ce(“div”,null,
ce(“div”,{style:{fontSize:13,color:”#c8964e”,letterSpacing:2,marginBottom:16,textTransform:“uppercase”}},“🚚 Proveedores”),
(dists||[]).map(function(d){
return ce(“div”,{key:d.id,style:Object.assign({},card,{borderLeft:“3px solid “+d.color})},
ce(“div”,{style:{fontSize:14,color:”#d0c0a0”,fontWeight:600,marginBottom:4}},d.name),
ce(“div”,{style:{display:“grid”,gridTemplateColumns:“1fr 1fr”,gap:8,marginBottom:8}},
ce(“div”,null,
ce(“div”,{style:{fontSize:9,color:”#3a5060”,marginBottom:2}},“REP”),
ce(“div”,{style:{fontSize:11,color:”#b0a890”}},d.rep),
ce(“div”,{style:{fontSize:10,color:”#4a6070”}},d.repPhone),
),
ce(“div”,null,
ce(“div”,{style:{fontSize:9,color:”#3a5060”,marginBottom:2}},“OFICINA”),
ce(“div”,{style:{fontSize:11,color:”#b0a890”}},d.phone),
ce(“div”,{style:{fontSize:10,color:”#4a6070”}},d.email),
),
),
d.notes&&ce(“div”,{style:{fontSize:10,color:”#4a7060”,marginBottom:8}},“ℹ️ “+d.notes),
ce(“div”,{style:{display:“flex”,gap:4,flexWrap:“wrap”}},
d.categories.map(function(c){return ce(“span”,{key:c,style:badge(d.color)},c);}),
),
);
}),
);
}

function renderLogs(){
var logs=lsGet(“lp:logs”,[]);
return ce(“div”,null,
ce(“div”,{style:{fontSize:13,color:”#c8964e”,letterSpacing:2,marginBottom:16,textTransform:“uppercase”}},“📝 Registro”),
logs.length===0
? ce(“div”,{style:Object.assign({},card,{textAlign:“center”,padding:30,color:”#3a5060”})},“Sin registros aún”)
: logs.slice(0,100).map(function(log,i){
return ce(“div”,{key:i,style:Object.assign({},card,{padding:“10px 14px”})},
ce(“div”,{style:{display:“flex”,justifyContent:“space-between”,marginBottom:3}},
ce(“span”,{style:{fontSize:11,color:”#c8964e”,fontWeight:600}},log.item||”–”),
ce(“span”,{style:{fontSize:9,color:”#3a5060”}},log.date||””),
),
ce(“div”,{style:{fontSize:10,color:”#4a6070”}},
ce(“span”,{style:{color:”#6a8090”,marginRight:6}},log.user||””),
log.detail||””
),
);
}),
);
}
}

function AdminPanel(props){
var isSuper=props.isSuper,currentUser=props.currentUser,toast=props.toast;
var s1=useState(lsGet(“lp:staff”,[])),staff=s1[0],setStaff=s1[1];
var s2=useState(””),newName=s2[0],setNewName=s2[1];
var s3=useState(“users”),tab=s3[0],setTab=s3[1];
var s4=useState(””),pCur=s4[0],setPCur=s4[1];
var s5=useState(””),pNew=s5[0],setPNew=s5[1];
var s6=useState(””),pConf=s6[0],setPConf=s6[1];
var s7=useState(””),pErr=s7[0],setPErr=s7[1];
var s8=useState(false),pOk=s8[0],setPOk=s8[1];
var currentPin=lsGet(“lp:pin”,DEFAULT_PIN);
var activeUsers=Object.values(lsGet(“lp:active_users”,{})).filter(function(u){return(tsNow()-u.lastSeen)<60000;});

function saveStaff(next){setStaff(next);lsSet(“lp:staff”,next);}
function addUser(){
var n=newName.trim();
if(!n)return;
if(staff.find(function(s){return s.toLowerCase()===n.toLowerCase();})){toast(“Ya existe”,“err”);return;}
saveStaff([].concat(staff,[n]));
setNewName(””);
toast(“✅ “+n+” agregado”);
appendLog({user:currentUser,type:“add”,item:n,detail:“Usuario agregado”});
}
function removeUser(name){
saveStaff(staff.filter(function(s){return s!==name;}));
toast(“🗑️ “+name+” eliminado”);
appendLog({user:currentUser,type:“delete”,item:name,detail:“Usuario eliminado”});
}
function doChangePin(){
setPErr(””);
if(pCur!==currentPin){setPErr(“PIN actual incorrecto”);return;}
if(pNew.length<4){setPErr(“Mínimo 4 caracteres”);return;}
if(pNew!==pConf){setPErr(“Los PINs no coinciden”);return;}
lsSet(“lp:pin”,pNew);
setPOk(true);setPCur(””);setPNew(””);setPConf(””);
setTimeout(function(){setPOk(false);},2000);
toast(“✅ PIN actualizado”);
appendLog({user:currentUser,type:“edit”,item:“PIN”,detail:“PIN actualizado”});
}

var inv=lsGet(“lp:inventory”,[])||[];

return ce(“div”,null,
ce(“div”,{style:{fontSize:13,color:”#c8964e”,letterSpacing:2,marginBottom:16,textTransform:“uppercase”}},“⚙️ Administración”),
activeUsers.length>0&&ce(“div”,{style:Object.assign({},card,{marginBottom:14})},
ce(“div”,{style:{fontSize:10,color:”#4a6070”,marginBottom:8,textTransform:“uppercase”}},“🟢 Activos ahora”),
ce(“div”,{style:{display:“flex”,gap:8,flexWrap:“wrap”}},
activeUsers.map(function(u){return ce(“span”,{key:u.name,style:badge(”#44cc88”)},u.name);})
),
),
ce(“div”,{style:{display:“flex”,gap:6,marginBottom:14}},
[“users”,“pin”,“stats”].map(function(t){
return ce(“button”,{key:t,onClick:function(){setTab(t);},style:Object.assign({},btn(tab===t?”#c8964e”:”#1a2830”,tab===t?”#06080a”:”#4a6070”),{fontSize:10})},
t===“users”?“👥 Usuarios”:t===“pin”?“🔑 PIN”:“📊 Stats”
);
})
),
tab===“users”&&ce(“div”,{style:card},
ce(“div”,{style:{fontSize:11,color:”#c8964e”,marginBottom:12,fontWeight:600}},“Empleados con Acceso”),
staff.length===0
? ce(“div”,{style:{color:”#3a5060”,fontSize:11,marginBottom:12}},“Sin empleados. Agrega el primero.”)
: staff.map(function(s){
return ce(“div”,{key:s,style:{display:“flex”,justifyContent:“space-between”,alignItems:“center”,padding:“8px 0”,borderBottom:“1px solid #1a2830”}},
ce(“span”,{style:{fontSize:12,color:”#b0a890”}},s),
isSuper&&ce(“button”,{onClick:function(){removeUser(s);},style:Object.assign({},btn(”#2a1010”,”#ff4444”),{fontSize:9,padding:“3px 8px”})},“Eliminar”),
);
}),
isSuper&&ce(“div”,{style:{marginTop:12,display:“flex”,gap:8}},
ce(“input”,{value:newName,onChange:function(e){setNewName(e.target.value);},onKeyDown:function(e){if(e.key===“Enter”)addUser();},placeholder:“Nombre del empleado”,style:Object.assign({},inputD,{flex:1,width:“auto”})}),
ce(“button”,{onClick:addUser,style:btn(”#c8964e”,”#06080a”)},”+ Agregar”),
),
!isSuper&&ce(“div”,{style:{marginTop:10,fontSize:10,color:”#3a5060”}},“Solo Fabinho puede administrar usuarios.”),
),
tab===“pin”&&ce(“div”,null,
isSuper
? ce(“div”,{style:card},
ce(“div”,{style:{fontSize:11,color:”#c8964e”,marginBottom:16,fontWeight:600}},“Cambiar PIN de Admin”),
ce(“div”,{style:{fontSize:10,color:”#4a6070”,marginBottom:4,textTransform:“uppercase”}},“PIN actual”),
ce(“input”,{type:“password”,value:pCur,onChange:function(e){setPCur(e.target.value);setPErr(””);},placeholder:”••••”,style:Object.assign({},inputD,{marginBottom:10,letterSpacing:4})}),
ce(“div”,{style:{fontSize:10,color:”#4a6070”,marginBottom:4,textTransform:“uppercase”}},“Nuevo PIN”),
ce(“input”,{type:“password”,value:pNew,onChange:function(e){setPNew(e.target.value);setPErr(””);},placeholder:“Mínimo 4 caracteres”,style:Object.assign({},inputD,{marginBottom:10,letterSpacing:4})}),
ce(“div”,{style:{fontSize:10,color:”#4a6070”,marginBottom:4,textTransform:“uppercase”}},“Confirmar nuevo PIN”),
ce(“input”,{type:“password”,value:pConf,onChange:function(e){setPConf(e.target.value);setPErr(””);},onKeyDown:function(e){if(e.key===“Enter”)doChangePin();},placeholder:“Repite el PIN”,style:Object.assign({},inputD,{marginBottom:10,letterSpacing:4})}),
pErr&&ce(“div”,{style:{color:”#ff6666”,fontSize:11,marginBottom:10}},pErr),
pOk&&ce(“div”,{style:{color:”#44cc88”,fontSize:11,marginBottom:10}},“✅ ¡Guardado!”),
ce(“button”,{onClick:doChangePin,style:Object.assign({},btn(”#c8964e”,”#06080a”),{width:“100%”})},“🔑 Guardar”),
)
: ce(“div”,{style:Object.assign({},card,{textAlign:“center”,padding:30,color:”#3a5060”})},“Solo Fabinho puede cambiar el PIN.”),
),
tab===“stats”&&ce(“div”,{style:card},
ce(“div”,{style:{fontSize:11,color:”#c8964e”,marginBottom:12,fontWeight:600}},“📊 Estadísticas”),
[
[“Total productos”,inv.length],
[“Stock crítico”,inv.filter(function(i){return i.stock<=i.backup;}).length],
[“Sin stock”,inv.filter(function(i){return i.stock===0;}).length],
[“Empleados registrados”,lsGet(“lp:staff”,[]).length],
[“Registros de actividad”,lsGet(“lp:logs”,[]).length],
].map(function(row){
return ce(“div”,{key:row[0],style:{display:“flex”,justifyContent:“space-between”,padding:“8px 0”,borderBottom:“1px solid #1a2830”}},
ce(“span”,{style:{fontSize:11,color:”#7a8a9a”}},row[0]),
ce(“span”,{style:{fontSize:13,color:”#c8964e”,fontWeight:700}},row[1]),
);
}),
),
);
}

window.App=App;
