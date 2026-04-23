“use strict”;
// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const DEFAULT_PIN = “1234”;
const POLL_MS = 4000;
const SUPER_ADMIN = “Fabinho”; // Solo este usuario puede cambiar credenciales y empleados
const INIT_INV = [
// ── WHISKY / SCOTCH / BOURBON ─────────────────────────────────────────────
{ id: 1, name: “Jameson”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.5, trend: “up”, emoji: “🥃”, distId: 1 },
{ id: 2, name: “Jim Beam”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.2, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 3, name: “Monkey’s Shoulder”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.8, trend: “up”, emoji: “🥃”, distId: 1 },
{ id: 4, name: “Wild Turkey”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.5, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 5, name: “Grant’s Triple Wood”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.2, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 6, name: “Blended Single Malt Scotch”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.0, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 7, name: “Crown Royal Woods”, category: “Whisky”, unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 1.8, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 8, name: “Crown Royal Apple”, category: “Whisky”, unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “up”, emoji: “🥃”, distId: 1 },
{ id: 9, name: “Crown Royal Beach”, category: “Whisky”, unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 1.6, trend: “up”, emoji: “🥃”, distId: 1 },
{ id: 10, name: “Makers Mark”, category: “Whisky”, unit: “750ml”, stock: 3, backup: 3, par: 3, velocity: 3.8, trend: “up”, emoji: “🥃”, distId: 1 },
{ id: 11, name: “Basil Hayden”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.3, trend: “up”, emoji: “🥃”, distId: 1 },
{ id: 12, name: “Fireball”, category: “Licores”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 4.5, trend: “up”, emoji: “🔥”, distId: 1 },
// ── COGNAC ────────────────────────────────────────────────────────────────
{ id: 13, name: “Hennessy”, category: “Cognac”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “up”, emoji: “🍷”, distId: 1 },
{ id: 14, name: “Martell Cordon Bleu”, category: “Cognac”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 1.8, trend: “stable”, emoji: “🍷”, distId: 1 },
// ── VODKA ─────────────────────────────────────────────────────────────────
{ id: 15, name: “House Vodka”, category: “Vodka”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 5.0, trend: “up”, emoji: “🍸”, distId: 1 },
{ id: 16, name: “Grey Goose”, category: “Vodka”, unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 3.5, trend: “up”, emoji: “🍸”, distId: 1 },
{ id: 17, name: “Tito’s”, category: “Vodka”, unit: “750ml”, stock: 4, backup: 4, par: 4, velocity: 6.2, trend: “up”, emoji: “🍸”, distId: 1 },
{ id: 18, name: “New Amsterdam Vodka”, category: “Vodka”, unit: “750ml”, stock: 3, backup: 3, par: 3, velocity: 4.5, trend: “up”, emoji: “🍸”, distId: 1 },
{ id: 19, name: “Kettle One”, category: “Vodka”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “stable”, emoji: “🍸”, distId: 1 },
{ id: 20, name: “Watermelon Basil Vodka”, category: “Vodka”, unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “up”, emoji: “🍸”, distId: 1 },
// ── GIN ───────────────────────────────────────────────────────────────────
{ id: 21, name: “Bombay Sapphire”, category: “Gin”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.8, trend: “stable”, emoji: “🫙”, distId: 1 },
{ id: 22, name: “Hendricks”, category: “Gin”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.5, trend: “up”, emoji: “🫙”, distId: 1 },
// ── RON ───────────────────────────────────────────────────────────────────
{ id: 23, name: “House Rum”, category: “Ron”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 4.5, trend: “up”, emoji: “🍹”, distId: 2 },
{ id: 24, name: “Malibu Pink”, category: “Licores”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.2, trend: “up”, emoji: “🌺”, distId: 2 },
// ── TEQUILA ───────────────────────────────────────────────────────────────
{ id: 25, name: “House Tequila”, category: “Tequila”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 4.8, trend: “up”, emoji: “🌵”, distId: 2 },
{ id: 26, name: “Julio Blanco”, category: “Tequila”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.5, trend: “up”, emoji: “🌵”, distId: 2 },
// ── VINO ──────────────────────────────────────────────────────────────────
{ id: 27, name: “Copper Ridge Cabernet”, category: “Vino”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “stable”, emoji: “🍷”, distId: 3 },
{ id: 28, name: “Chateau Ste Michelle Riesling”, category: “Vino”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🍷”, distId: 3 },
{ id: 29, name: “Chateau Ste Michelle Cabernet”, category: “Vino”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🍷”, distId: 3 },
{ id: 30, name: “Pinot Noir”, category: “Vino”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 2.5, trend: “up”, emoji: “🍷”, distId: 3 },
{ id: 31, name: “Sauvignon Blanc”, category: “Vino”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 1.8, trend: “stable”, emoji: “🍷”, distId: 3 },
// ── MIXERS / JUGOS ────────────────────────────────────────────────────────
{ id: 32, name: “Grenadine”, category: “Jugos”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🧃”, distId: 5 },
{ id: 33, name: “Margarita Mix”, category: “Jugos”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 2.5, trend: “up”, emoji: “🧃”, distId: 5 },
{ id: 34, name: “Coco Lopez”, category: “Jugos”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 1.5, trend: “stable”, emoji: “🥥”, distId: 5 },
{ id: 35, name: “Tonic Water”, category: “Sodas”, unit: “case”, stock: 4, backup: 4, par: 4, velocity: 5.0, trend: “up”, emoji: “🥤”, distId: 4 },
// ── CERVEZA BOTELLA/LATA ──────────────────────────────────────────────────
{ id: 36, name: “Stella Artois”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 4.0, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 37, name: “Corona”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 5.5, trend: “up”, emoji: “🍺”, distId: 4 },
{ id: 38, name: “Flat Tire”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 3.5, trend: “up”, emoji: “🍺”, distId: 4 },
{ id: 39, name: “Truly”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 4.2, trend: “up”, emoji: “🍺”, distId: 4 },
{ id: 40, name: “High Noon”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 4.8, trend: “up”, emoji: “🍺”, distId: 4 },
{ id: 41, name: “Modelo”, category: “Cerveza”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 5.0, trend: “up”, emoji: “🍺”, distId: 4 },
{ id: 42, name: “Yuengling”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 3.8, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 43, name: “Miller”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 4.0, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 44, name: “Voodoo Ranger”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 3.5, trend: “up”, emoji: “🍺”, distId: 4 },
{ id: 45, name: “Modelo Ultra”, category: “Cerveza”, unit: “case”, stock: 2, backup: 2, par: 2, velocity: 3.8, trend: “up”, emoji: “🍺”, distId: 4 },
// ── KEGS ──────────────────────────────────────────────────────────────────
{ id: 46, name: “Samuel Adams (Keg)”, category: “Cerveza”, unit: “keg”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🛢️”, distId: 4 },
{ id: 47, name: “Buenaveza (Keg)”, category: “Cerveza”, unit: “keg”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “up”, emoji: “🛢️”, distId: 4 },
{ id: 48, name: “Mostly (Keg)”, category: “Cerveza”, unit: “keg”, stock: 1, backup: 1, par: 1, velocity: 1.8, trend: “stable”, emoji: “🛢️”, distId: 4 },
{ id: 49, name: “Mango Cart (Keg)”, category: “Cerveza”, unit: “keg”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “up”, emoji: “🛢️”, distId: 4 },
];
const INIT_DISTS = [
{ id: 1, name: “Southern Glazer’s”, short: “Southern Glazer’s”, phone: “1-800-815-1400”, email: “orders@southernglazers.com”, rep: “Carlos Mendez”, repPhone: “305-555-0191”, categories: [“Whisky”, “Vodka”, “Gin”, “Cognac”], color: “#c8964e”, notes: “Min $500. Entrega mar y vie.” },
{ id: 2, name: “RNDC”, short: “RNDC”, phone: “1-888-367-7632”, email: “orders@rndc-usa.com”, rep: “Maria Torres”, repPhone: “786-555-0282”, categories: [“Ron”, “Tequila”, “Licores”], color: “#6e8ec8”, notes: “Min $300. Entrega lun y jue.” },
{ id: 3, name: “Glazer’s Beverage”, short: “Glazer’s”, phone: “1-800-527-9195”, email: “orders@glazers.com”, rep: “Luis Reyes”, repPhone: “954-555-0393”, categories: [“Cognac”, “Licores”, “Vino”], color: “#a04060”, notes: “Min $200. Entrega mie.” },
{ id: 4, name: “Gold Coast Dist.”, short: “Gold Coast”, phone: “1-800-446-2653”, email: “orders@goldcoast.com”, rep: “Sandra Cruz”, repPhone: “561-555-0404”, categories: [“Cerveza”, “Sodas”], color: “#e8c84a”, notes: “Min $150. Entrega lun/mie/vie.” },
{ id: 5, name: “Cideblocks Dist.”, short: “Cideblocks”, phone: “1-800-555-0505”, email: “orders@cideblocks.com”, rep: “Ana Rivera”, repPhone: “407-555-0505”, categories: [“Vino”, “Jugos”, “Sodas”, “Frutas”], color: “#6ec86e”, notes: “Min $100. Entrega mar.” },
];
const CATS = [“Todos”, “Whisky”, “Vodka”, “Ron”, “Tequila”, “Gin”, “Cognac”, “Licores”, “Cerveza”, “Vino”, “Jugos”, “Frutas”, “Sodas”, “Desechables”];
const CAT_CLR = { Whisky: “#c8964e”, Vodka: “#6eb5c8”, Ron: “#c86e6e”, Tequila: “#8ec86e”, Gin: “#8e6ec8”, Cognac: “#c8a86e”, Licores: “#c86ea8”, Cerveza: “#e8c84a”, Vino: “#a04060”, Jugos: “#e8904a”, Frutas: “#6ec86e”, Sodas: “#4ab8e8”, Desechables: “#909090” };
const CAT_EMO = { Whisky: “🥃”, Vodka: “🍸”, Ron: “🍹”, Tequila: “🌵”, Gin: “🫙”, Cognac: “🍷”, Licores: “🥛”, Cerveza: “🍺”, Vino: “🍷”, Jugos: “🧃”, Frutas: “🍓”, Sodas: “🥤”, Desechables: “🥤” };
const UNIT_DEF = { Whisky: “750ml”, Vodka: “750ml”, Ron: “750ml”, Tequila: “750ml”, Gin: “750ml”, Cognac: “750ml”, Licores: “750ml”, Cerveza: “355ml lata”, Vino: “750ml botella”, Jugos: “1L caja”, Frutas: “kg”, Sodas: “2L botella”, Desechables: “paquete x50” };
const PALETTE = [”#c8964e”, “#6e8ec8”, “#a04060”, “#e8c84a”, “#8ec86e”, “#8e6ec8”, “#c86e6e”, “#4ab8e8”, “#44cc88”, “#c86ea8”];
const ACT = { ADD: “ADD”, DEL: “DEL”, STOCK: “STOCK”, BACKUP: “BACKUP”, PAR: “PAR”, LOGIN: “LOGIN”, LOGOUT: “LOGOUT”, ORDER: “ORDER” };
const ACT_CLR = { ADD: “#44cc88”, DEL: “#ff4444”, STOCK: “#c8964e”, BACKUP: “#6e8ec8”, PAR: “#8a7a6a”, LOGIN: “#6ec86e”, LOGOUT: “#8a7a6a”, ORDER: “#a04060” };
const ACT_LBL = { ADD: “Añadió”, DEL: “Eliminó”, STOCK: “Ajustó stock”, BACKUP: “Ajustó backup”, PAR: “Editó mínimo”, LOGIN: “Entró”, LOGOUT: “Salió”, ORDER: “Generó pedido” };
// ── UTILS ─────────────────────────────────────────────────────────────────────
const tsNow = () => new Date().toLocaleTimeString(“es-US”, { hour: “2-digit”, minute: “2-digit”, second: “2-digit”, hour12: true });
const dateNow = () => new Date().toLocaleDateString(“es-US”, { month: “short”, day: “numeric”, year: “numeric” });
// ── STORAGE ──
async function shGet(key, fallback) { try {
const v = localStorage.getItem(key);
if (v !== null && v !== “”)
return JSON.parse(v);
}
catch (e) { } return fallback; }
async function shSet(key, value) { try {
localStorage.setItem(key, JSON.stringify(value));
}
catch (e) { } }
async function shGetSync(key, fallback) { return shGet(key, fallback); }
function lsGet(key, fallback) { try {
const v = localStorage.getItem(key);
if (v !== null && v !== “”)
return JSON.parse(v);
}
catch (e) { } return fallback; }
function lsSet(key, value) { try {
localStorage.setItem(key, JSON.stringify(value));
}
catch (e) { } }
async function appendLog(entry) { const logs = await shGet(“lp:logs”, []); logs.unshift(entry); await shSet(“lp:logs”, logs.slice(0, 300)); }
async function upsertUser(name) { const u = await shGet(“lp:active”, {}); u[name] = { name, lastSeen: Date.now() }; await shSet(“lp:active”, u); }
async function removeUser(name) { const u = await shGet(“lp:active”, {}); delete u[name]; await shSet(“lp:active”, u); }
// ── STYLES ────────────────────────────────────────────────────────────────────
const S = {
btn: (bg, clr = “#0a0704”) => ({ background: bg, border: “none”, borderRadius: 7, padding: “6px 13px”, color: clr, fontSize: 11, cursor: “pointer”, fontWeight: 600, transition: “opacity .2s” }),
mini: { background: “rgba(255,255,255,.08)”, border: “1px solid #2a1e12”, borderRadius: 4, color: “#8a7a6a”, cursor: “pointer”, width: 18, height: 18, fontSize: 11, display: “flex”, alignItems: “center”, justifyContent: “center”, padding: 0 },
miniD: { background: “rgba(255,255,255,.06)”, border: “1px solid #1a2a3a”, borderRadius: 4, color: “#6a8a9a”, cursor: “pointer”, width: 20, height: 20, fontSize: 12, display: “flex”, alignItems: “center”, justifyContent: “center”, padding: 0 },
input: { background: “rgba(255,255,255,.05)”, border: “1px solid #2a1e12”, borderRadius: 7, padding: “7px 10px”, color: “#f0e6d0”, fontSize: 12, outline: “none” },
inputD: { background: “rgba(255,255,255,.05)”, border: “1px solid #1a2a3a”, borderRadius: 7, padding: “7px 10px”, color: “#e0eaf0”, fontSize: 12, outline: “none” },
};
// ── SESSION SECURITY ─────────────────────────────────────────────────────────
// Sessions are in-memory only — closing/reloading always requires re-login
// No session token is ever stored to disk
// ═══════════════════════════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════════════════════════
function App() {
// screen always starts at “login” — never persisted
const [screen, setScreen] = useState(“login”);
const [user, setUser] = useState(null);
const [isSuperAdmin, setIsSuperAdmin] = useState(false);
const [pin, setPin] = useState(null);
const [adminUser, setAdminUser] = useState(null);
const [staff, setStaff] = useState(null);
const [ready, setReady] = useState(false);
// Clear any stale active users on load (ensures clean state)
useEffect(() => {
shSet(“lp:active”, {}).catch(() => { });
}, []);
useEffect(() => {
async function boot() {
const [pinVal, userVal, staffVal] = await Promise.all([
shGetSync(“lp:pin”, DEFAULT_PIN),
shGetSync(“lp:adminuser”, “Admin”),
shGetSync(“lp:staff”, []),
]);
if (!pinVal || pinVal === DEFAULT_PIN)
await shSet(“lp:pin”, pinVal || DEFAULT_PIN);
if (!userVal)
await shSet(“lp:adminuser”, “Admin”);
setPin(pinVal || DEFAULT_PIN);
setAdminUser(userVal || “Admin”);
setStaff(staffVal || []);
setReady(true);
}
boot();
}, []);
const changePin = async (np) => { setPin(np); await shSet(“lp:pin”, np); };
const changeAdminUser = async (nu) => { setAdminUser(nu); await shSet(“lp:adminuser”, nu); };
const changeStaff = async (ns) => { setStaff(ns); await shSet(“lp:staff”, ns); };
const handleLogin = (u, a, isSuper) => {
setUser(u);
setIsSuperAdmin(!!isSuper);
setScreen(a ? “admin” : “inv”);
};
const handleLogout = async (userName) => {
if (userName)
await removeUser(userName);
// Full reset — forces re-login
setUser(null);
setIsSuperAdmin(false);
setScreen(“login”);
};
if (!ready)
return React.createElement(Splash, null);
// Gate: if no valid screen state, always show login
if (screen === “login” || !user)
return (React.createElement(Login, { pin: pin, adminUser: adminUser, staff: staff, onLogin: handleLogin }));
if (screen === “inv”)
return React.createElement(InvApp, { user: user, onLogout: () => handleLogout(user) });
if (screen === “admin”)
return (React.createElement(AdminApp, { pin: pin, adminUser: adminUser, staff: staff, isSuperAdmin: isSuperAdmin, onPin: changePin, onAdminUser: changeAdminUser, onStaff: changeStaff, onLogout: () => handleLogout(null) }));
// Fallback safety — always login
return React.createElement(Login, { pin: pin, adminUser: adminUser, staff: staff, onLogin: handleLogin });
}
function Splash() {
return React.createElement(“div”, { style: { minHeight: “100vh”, background: “#06080a”, display: “flex”, alignItems: “center”, justifyContent: “center”, color: “#c8964e”, fontFamily: “Georgia”, fontSize: 14, letterSpacing: 2 } }, “\uD83C\uDF7E Cargando LicorPro…”);
}
// ═══════════════════════════════════════════════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════════════════════════════════════════════
function Login({ pin, adminUser, staff, onLogin }) {
const [name, setName] = useState(””);
const [auName, setAuName] = useState(””);
const [pw, setPw] = useState(””);
const [mode, setMode] = useState(“user”);
const [err, setErr] = useState(””);
const hasStaff = staff && staff.length > 0;
const go = async () => {
setErr(””);
if (mode === “admin”) {
if (pw !== pin) {
setErr(“PIN incorrecto”);
return;
}
const loginName = adminUser || “Admin”;
const isSuper = loginName.toLowerCase() === SUPER_ADMIN.toLowerCase();
onLogin(loginName, true, isSuper);
}
else {
const n = name.trim();
if (!n) {
setErr(“Escribe tu nombre”);
return;
}
if (!hasStaff) {
setErr(“Acceso bloqueado. Contacta al administrador.”);
return;
}
const match = staff.find(s => s.toLowerCase() === n.toLowerCase());
if (!match) {
setErr(“Nombre no autorizado. Verifica con el administrador.”);
return;
}
await appendLog({ user: match, type: ACT.LOGIN, detail: “Accedió al inventario”, item: “—”, ts: tsNow(), date: dateNow() });
await upsertUser(match);
onLogin(match, false, false);
}
};
return (React.createElement(“div”, { style: { minHeight: “100vh”, background: “linear-gradient(135deg,#06080a,#0d1117,#06080a)”, display: “flex”, alignItems: “center”, justifyContent: “center”, fontFamily: “Georgia” } },
React.createElement(“div”, { style: { width: 340, background: “rgba(255,255,255,.03)”, border: “1px solid #1e2830”, borderRadius: 18, padding: 36, boxShadow: “0 30px 80px rgba(0,0,0,.7)” } },
React.createElement(“div”, { style: { textAlign: “center”, marginBottom: 28 } },
React.createElement(“div”, { style: { fontSize: 40, marginBottom: 8 } }, “\uD83C\uDF7E”),
React.createElement(“div”, { style: { fontSize: 22, letterSpacing: 3, color: “#f0e6d0”, fontWeight: 400 } }, “LicorPro”),
React.createElement(“div”, { style: { fontSize: 10, letterSpacing: 4, color: “#4a5a6a”, textTransform: “uppercase”, marginTop: 4 } }, “Sistema de Inventario”)),
React.createElement(“div”, { style: { display: “flex”, background: “rgba(0,0,0,.3)”, borderRadius: 9, padding: 3, marginBottom: 24, border: “1px solid #1e2830” } }, [[“user”, “👤 Empleado”], [“admin”, “🔐 Admin”]].map(([m, l]) => (React.createElement(“button”, { key: m, onClick: () => { setMode(m); setErr(””); }, style: { flex: 1, background: mode === m ? “#c8964e” : “transparent”, border: “none”, borderRadius: 6, padding: “8px”, color: mode === m ? “#0a0704” : “#6a7a8a”, fontSize: 11, cursor: “pointer”, fontWeight: mode === m ? 700 : 400, transition: “all .2s” } }, l)))),
mode === “user” ? (!hasStaff ? (React.createElement(“div”, { style: { background: “rgba(255,68,68,.07)”, border: “1px solid rgba(255,68,68,.25)”, borderRadius: 10, padding: “20px”, textAlign: “center” } },
React.createElement(“div”, { style: { fontSize: 28, marginBottom: 8 } }, “\uD83D\uDD12”),
React.createElement(“div”, { style: { fontSize: 12, color: “#ff9999”, fontWeight: 600, marginBottom: 6 } }, “Acceso restringido”),
React.createElement(“div”, { style: { fontSize: 10, color: “#7a4a4a”, lineHeight: 1.7 } }, “El administrador a\u00FAn no ha registrado empleados. Contacta al admin.”))) : (React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, color: “#6a7a8a”, letterSpacing: 1, marginBottom: 6, textTransform: “uppercase” } }, “Tu nombre”),
React.createElement(“input”, { value: name, onChange: e => { setName(e.target.value); setErr(””); }, onKeyDown: e => e.key === “Enter” && go(), placeholder: “Escribe tu nombre…”, style: { …S.input, width: “100%”, boxSizing: “border-box”, fontSize: 13 }, autoFocus: true }),
React.createElement(“div”, { style: { fontSize: 9, color: “#3a5a4a”, marginTop: 7, display: “flex”, alignItems: “center”, gap: 4 } },
“\uD83D\uDD12 Acceso verificado \u2014 “,
staff.length,
“ empleado”,
staff.length !== 1 ? “s” : “”,
“ autorizado”,
staff.length !== 1 ? “s” : “”)))) : (React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, color: “#6a7a8a”, letterSpacing: 1, marginBottom: 6, textTransform: “uppercase” } }, “PIN de administrador”),
React.createElement(“input”, { value: pw, onChange: e => { setPw(e.target.value); setErr(””); }, onKeyDown: e => e.key === “Enter” && go(), type: “password”, placeholder: “\u2022\u2022\u2022\u2022”, style: { …S.input, width: “100%”, boxSizing: “border-box”, letterSpacing: 6, fontSize: 22, textAlign: “center” }, autoFocus: true }),
React.createElement(“div”, { style: { fontSize: 9, color: “#3a4a5a”, marginTop: 7, textAlign: “center” } },
“Acceso como “,
React.createElement(“span”, { style: { color: adminUser?.toLowerCase() === SUPER_ADMIN.toLowerCase() ? “#c8964e” : “#4a5a6a”, fontWeight: adminUser?.toLowerCase() === SUPER_ADMIN.toLowerCase() ? 700 : 400 } }, adminUser || “Admin”),
adminUser?.toLowerCase() === SUPER_ADMIN.toLowerCase() && React.createElement(“span”, { style: { color: “#c8964e” } }, “ \uD83D\uDC51”)))),
err && (React.createElement(“div”, { style: { color: “#ff8888”, fontSize: 11, marginTop: 12, background: “rgba(255,68,68,.08)”, border: “1px solid rgba(255,68,68,.25)”, borderRadius: 8, padding: “9px 12px”, display: “flex”, alignItems: “center”, gap: 8 } },
React.createElement(“span”, { style: { fontSize: 15, flexShrink: 0 } }, “\uD83D\uDEAB”),
React.createElement(“span”, null, err))),
React.createElement(“button”, { onClick: go, disabled: mode === “user” && !hasStaff, style: { width: “100%”, background: mode === “user” && !hasStaff ? “#1a1a1a” : “#c8964e”, border: “none”, borderRadius: 9, padding: “12px”, color: mode === “user” && !hasStaff ? “#3a3a3a” : “#0a0704”, fontSize: 13, fontWeight: 700, cursor: mode === “user” && !hasStaff ? “not-allowed” : “pointer”, marginTop: 18, transition: “all .2s” } }, mode === “admin” ? “Entrar como Admin” : hasStaff ? “Entrar al Inventario” : “Acceso no disponible”),
React.createElement(“div”, { style: { textAlign: “center”, marginTop: 12, fontSize: 10, color: “#2a3a4a” } }, mode === “user” ? (hasStaff ? “Solo empleados autorizados” : “Requiere configuración del admin”) : “Panel de control administrativo”))));
}
// ═══════════════════════════════════════════════════════════════════════════════
// INVENTORY APP
// ═══════════════════════════════════════════════════════════════════════════════
function InvApp({ user, onLogout }) {
const [inv, setInv] = useState(null);
const [dists, setDists] = useState(null);
const [orders, setOrders] = useState([]);
const [view, setView] = useState(“inventory”);
const [filter, setFilter] = useState(“Todos”);
const [search, setSearch] = useState(””);
const [showAdd, setShowAdd] = useState(false);
const [newItem, setNewItem] = useState({ name: “”, category: “Cerveza”, unit: “355ml lata”, stock: 0, backup: 0, par: 2, distId: “” });
const [showDistM, setShowDistM] = useState(false);
const [editDistId, setEditDistId] = useState(null);
const [newDist, setNewDist] = useState({ name: “”, short: “”, phone: “”, email: “”, rep: “”, repPhone: “”, categories: [], color: “#c8964e”, notes: “” });
const [editParId, setEditParId] = useState(null);
const [editParV, setEditParV] = useState(””);
const [activeDist, setActiveDist] = useState(null);
const [orderQ, setOrderQ] = useState({});
const [orderNote, setOrderNote] = useState(””);
const [aiOrderLines, setAiOrderLines] = useState([]);
const [aiOrderLoading, setAiOrderLoading] = useState(false);
const [showAI, setShowAI] = useState(false);
const [aiText, setAiText] = useState(””);
const [aiLoading, setAiLoading] = useState(false);
const [notif, setNotif] = useState(null);
const [timelineItem, setTimelineItem] = useState(null);
const [manualDate, setManualDate] = useState(””);
const [manualType, setManualType] = useState(“arrived”);
const [manualQty, setManualQty] = useState(””);
const [manualNote, setManualNote] = useState(””);
const [manualErr, setManualErr] = useState(””);
const [retireItem, setRetireItem] = useState(null);
const [retireQty, setRetireQty] = useState(“1”);
const [retireReason, setRetireReason] = useState(””);
const hbRef = useRef(null);
useEffect(() => {
async function boot() {
const [invData, distData, ordData] = await Promise.all([
shGetSync(“lp:inventory”, null),
shGetSync(“lp:distributors”, null),
shGet(“lp:orders”, []),
]);
const inv_ = invData || INIT_INV;
const dist_ = distData || INIT_DISTS;
if (!invData)
await shSet(“lp:inventory”, inv_);
if (!distData)
await shSet(“lp:distributors”, dist_);
setInv(inv_);
setDists(dist_);
setOrders(ordData);
}
boot();
hbRef.current = setInterval(() => upsertUser(user), 15000);
return () => clearInterval(hbRef.current);
}, [user]);
const toast = (msg, type = “ok”) => { setNotif({ msg, type }); setTimeout(() => setNotif(null), 3000); };
const log = useCallback(async (type, item, detail) => { await appendLog({ user, type, detail, item: item || “—”, ts: tsNow(), date: dateNow() }); }, [user]);
const saveInv = async (next) => { setInv(next); await shSet(“lp:inventory”, next); };
const saveDists = async (next) => { setDists(next); await shSet(“lp:distributors”, next); };
const saveOrders = async (next) => { setOrders(next); await shSet(“lp:orders”, next); };
const adjStock = async (id, d) => {
const it = inv.find(i => i.id === id);
const newStock = Math.max(0, it.stock + d);
let history = it.history ? […it.history] : [];
let updates = { stock: newStock };
// Stock hit 0 → record depletion
if (newStock === 0 && it.stock > 0) {
const ev = { type: “finished”, date: dateNow(), ts: tsNow(), user, stock: 0 };
history.push(ev);
updates.lastFinished = dateNow();
updates.history = history;
toast(`⚠️ ${it.name} se agotó — registrado`, “err”);
}
// Coming from 0 → record arrival
if (it.stock === 0 && newStock > 0) {
const ev = { type: “arrived”, date: dateNow(), ts: tsNow(), user, stock: newStock };
history.push(ev);
updates.lastArrived = dateNow();
updates.history = history;
toast(`📦 ${it.name} llegó — registrado`);
}
// Recalculate velocity from history if we have cycles
const cycles = calcCycles(history);
if (cycles.avgDays > 0)
updates.velocity = parseFloat((it.par / cycles.avgDays * 7).toFixed(1));
const nx = inv.map(i => i.id === id ? { …i, …updates } : i);
await saveInv(nx);
await log(ACT.STOCK, it.name, `${d > 0 ? "+" : ""}${d} → stock:${newStock}`);
};
const markArrived = async (id) => {
const it = inv.find(i => i.id === id);
const history = it.history ? […it.history] : [];
history.push({ type: “arrived”, date: dateNow(), ts: tsNow(), user, stock: it.stock });
await saveInv(inv.map(i => i.id === id ? { …i, history, lastArrived: dateNow() } : i));
await log(ACT.STOCK, it.name, `Llegada registrada — stock:${it.stock}`);
toast(`📦 Llegada de ${it.name} registrada`);
};
const markFinished = async (id) => {
const it = inv.find(i => i.id === id);
const history = it.history ? […it.history] : [];
history.push({ type: “finished”, date: dateNow(), ts: tsNow(), user, stock: 0 });
await saveInv(inv.map(i => i.id === id ? { …i, history, lastFinished: dateNow(), stock: 0 } : i));
await log(ACT.STOCK, it.name, `Agotado registrado`);
toast(`⚠️ ${it.name} marcado como agotado`, “err”);
};
const markRetired = async (id, qty = 1, reason = “”) => {
const it = inv.find(i => i.id === id);
const newStock = Math.max(0, it.stock - qty);
const history = it.history ? […it.history] : [];
history.push({ type: “retired”, date: dateNow(), ts: tsNow(), user, qty, reason: reason || undefined, stock: newStock });
await saveInv(inv.map(i => i.id === id ? { …i, history, lastRetired: dateNow(), stock: newStock } : i));
await log(ACT.STOCK, it.name, `Retirado: ${qty} unidad${qty !== 1 ? "es" : ""} → stock:${newStock}${reason ? " (" + reason + ")" : ""}`);
toast(`🗑️ ${it.name}: ${qty} unidad${qty !== 1 ? "es" : ""} retirada${qty !== 1 ? "s" : ""}`, “err”);
};
const calcCycles = (history) => {
if (!history || history.length < 2)
return { avgDays: 0, cycles: 0 };
const arrivals = history.filter(h => h.type === “arrived”);
const finishes = history.filter(h => h.type === “finished”);
if (arrivals.length === 0 || finishes.length === 0)
return { avgDays: 0, cycles: 0 };
const pairs = [];
arrivals.forEach(a => {
const finish = finishes.find(f => new Date(f.date + “,” + f.ts) > new Date(a.date + “,” + a.ts));
if (finish) {
const days = Math.max(1, Math.round((new Date(finish.date) - new Date(a.date)) / 86400000));
pairs.push(days);
}
});
if (pairs.length === 0)
return { avgDays: 0, cycles: 0 };
const avgDays = Math.round(pairs.reduce((a, b) => a + b, 0) / pairs.length);
return { avgDays, cycles: pairs.length };
};
const addManualEntry = async () => {
setManualErr(””);
if (!manualDate) {
setManualErr(“Selecciona una fecha”);
return;
}
const it = inv.find(i => i.id === timelineItem.id);
const history = it.history ? […it.history] : [];
const fmtDate = new Date(manualDate + “T12:00:00”).toLocaleDateString(“es-US”, { month: “short”, day: “numeric”, year: “numeric” });
const ev = {
type: manualType,
date: fmtDate,
ts: “manual”,
user,
stock: manualType === “arrived” ? (parseInt(manualQty) || it.stock) : manualType === “retired” ? Math.max(0, it.stock - (parseInt(manualQty) || 1)) : 0,
qty: (manualType === “arrived” || manualType === “retired”) ? (parseInt(manualQty) || 1) : undefined,
note: manualNote.trim() || undefined,
manual: true,
};
history.push(ev);
history.sort((a, b) => new Date(a.date) - new Date(b.date));
const updates = { history };
if (manualType === “arrived”) {
updates.lastArrived = fmtDate;
}
if (manualType === “finished”) {
updates.lastFinished = fmtDate;
}
if (manualType === “retired”) {
updates.lastRetired = fmtDate;
}
const newInv = inv.map(i => i.id === it.id ? { …i, …updates } : i);
await saveInv(newInv);
await log(ACT.STOCK, it.name, `Fecha manual: ${manualType === "arrived" ? "Llegada" : manualType === "retired" ? "Retirado" : "Agotado"} el ${fmtDate}`);
setTimelineItem(newInv.find(i => i.id === it.id));
setManualDate(””);
setManualQty(””);
setManualNote(””);
setManualType(“arrived”);
toast(`Fecha registrada para ${it.name}`);
};
const adjBackup = async (id, d) => { const it = inv.find(i => i.id === id); const nx = inv.map(i => i.id === id ? { …i, backup: Math.max(0, i.backup + d) } : i); await saveInv(nx); await log(ACT.BACKUP, it.name, `${d > 0 ? "+" : ""}${d} → backup:${nx.find(i => i.id === id).backup}`); };
const delItem = async (id) => { const it = inv.find(i => i.id === id); await saveInv(inv.filter(i => i.id !== id)); await log(ACT.DEL, it.name, “Eliminó de inventario”); toast(“Producto eliminado”, “err”); };
const commitPar = async (id) => {
const v = parseInt(editParV, 10);
if (!isNaN(v) && v >= 0) {
const it = inv.find(i => i.id === id);
await saveInv(inv.map(i => i.id === id ? { …i, par: v } : i));
await log(ACT.PAR, it.name, `Mínimo → ${v}`);
toast(“Mínimo actualizado”);
}
setEditParId(null);
};
const addItem = async () => {
if (!newItem.name.trim())
return;
const it = { …newItem, id: Date.now(), velocity: parseFloat((Math.random() * 4 + 1).toFixed(1)), trend: “stable”, emoji: CAT_EMO[newItem.category] || “🍾” };
await saveInv([…inv, it]);
await log(ACT.ADD, it.name, `Stock:${it.stock}, Backup:${it.backup}`);
setNewItem({ name: “”, category: “Cerveza”, unit: “355ml lata”, stock: 0, backup: 0, par: 2, distId: “” });
setShowAdd(false);
toast(`${it.name} añadido`);
};
const saveDist = async () => {
if (!newDist.name.trim())
return;
const nx = editDistId ? dists.map(d => d.id === editDistId ? { …newDist, id: editDistId } : d) : […dists, { …newDist, id: Date.now() }];
await saveDists(nx);
setShowDistM(false);
toast(editDistId ? “Distribuidora actualizada” : “Distribuidora añadida”);
};
const delDist = async (id) => { await saveDists(dists.filter(d => d.id !== id)); toast(“Distribuidora eliminada”, “err”); };
const aiOrder = async () => {
if (!activeDist)
return;
const d = dists.find(d => d.id === activeDist);
const di = inv.filter(i => i.distId === activeDist);
setAiOrderLoading(true);
setAiOrderLines([]);
const summary = di.map(i => `id=${i.id} ${i.name}:stock=${i.stock},backup=${i.backup},min=${i.par},vel=${i.velocity},trend=${i.trend}`).join(”\n”);
try {
const res = await fetch(“https://api.anthropic.com/v1/messages”, { method: “POST”, headers: { “Content-Type”: “application/json” }, body: JSON.stringify({ model: “claude-sonnet-4-20250514”, max_tokens: 700, system: `Responde SOLO con JSON array sin backticks. Formato:[{"id":numId,"qty":cantidad,"reason":"razon corta"}]. Solo productos que necesitan reabastecimiento.`, messages: [{ role: “user”, content: `Dist:${d.name}\n${summary}\nGenera pedido optimo para proxima semana.` }] }) });
const data = await res.json();
const parsed = JSON.parse((data.content?.[0]?.text || “[]”).replace(/`json|`/g, “”).trim());
const qtys = {};
parsed.forEach(p => { qtys[p.id] = p.qty; });
setOrderQ(qtys);
setAiOrderLines(parsed.map(p => ({ name: inv.find(i => i.id === p.id)?.name || `ID${p.id}`, qty: p.qty, reason: p.reason })));
toast(“Pedido IA generado”);
}
catch {
toast(“Error al generar pedido”, “err”);
}
setAiOrderLoading(false);
};
const saveOrder = async () => {
const d = dists.find(d => d.id === activeDist);
const di = inv.filter(i => i.distId === activeDist);
const lines = di.filter(i => (orderQ[i.id] || 0) > 0).map(i => ({ …i, orderQty: orderQ[i.id] }));
if (!lines.length) {
toast(“Agrega cantidades primero”, “err”);
return;
}
const o = { id: Date.now(), distId: activeDist, distName: d?.name, distColor: d?.color, date: dateNow(), items: lines, note: orderNote, total: lines.reduce((a, b) => a + b.orderQty, 0) };
const nx = [o, …orders];
await saveOrders(nx);
await log(ACT.ORDER, d?.name, `Pedido ${o.total}u (${lines.length} productos)`);
setOrderQ({});
setOrderNote(””);
setAiOrderLines([]);
toast(`Pedido a ${d?.name} guardado`);
};
const getAI = async () => {
setAiLoading(true);
setShowAI(true);
setAiText(””);
const s = inv.map(i => {
const cyc = calcCycles(i.history);
return `${i.name}(${i.category}):stock=${i.stock},backup=${i.backup},par=${i.par},vel=${i.velocity}${cyc.avgDays > 0 ? `,ciclo_real=${cyc.avgDays}d,ciclos=${cyc.cycles}`: ""}${i.lastArrived ?`,ultima_llegada=${i.lastArrived}`: ""}${i.lastFinished ?`,ultimo_agotado=${i.lastFinished}` : ""}`;
}).join(”\n”);
try {
const res = await fetch(“https://api.anthropic.com/v1/messages”, { method: “POST”, headers: { “Content-Type”: “application/json” }, body: JSON.stringify({ model: “claude-sonnet-4-20250514”, max_tokens: 900, system: `Eres agente de ventas experto. Responde en espanol, conciso, emojis, ### para titulos. Cuando hay datos de ciclo_real usa esos para calcular cuando se va a acabar cada producto y cuando hay que pedirlo.`, messages: [{ role: “user”, content: `Analiza inventario con datos de ciclos reales:\n${s}` }] }) });
const data = await res.json();
setAiText(data.content?.[0]?.text || “”);
}
catch {
setAiText(“Error de conexion.”);
}
setAiLoading(false);
};
const logout = async () => { await log(ACT.LOGOUT, “—”, “Cerro sesion”); await removeUser(user); onLogout(); };
if (!inv || !dists)
return React.createElement(Splash, null);
const filt = inv.filter(i => (filter === “Todos” || i.category === filter) && (i.name.toLowerCase().includes(search.toLowerCase()) || i.category.toLowerCase().includes(search.toLowerCase())));
const tStock = inv.reduce((a, b) => a + b.stock, 0);
const tBackup = inv.reduce((a, b) => a + b.backup, 0);
const nLow = inv.filter(i => i.stock <= i.par * 2).length;
const crits = inv.filter(i => i.stock <= i.par);
const distInv = activeDist ? inv.filter(i => i.distId === activeDist) : [];
const oTotal = Object.values(orderQ).reduce((a, b) => a + (b || 0), 0);
const stStatus = it => it.stock <= it.par ? { c: “#ff4444”, l: “CRITICO” } : it.stock <= it.par * 2 ? { c: “#ffaa00”, l: “BAJO” } : { c: “#44cc88”, l: “OK” };
return (React.createElement(“div”, { style: { minHeight: “100vh”, background: “linear-gradient(135deg,#0a0704,#150f08,#0a0704)”, fontFamily: “Georgia”, color: “#f0e6d0”, paddingBottom: 60 } },
notif && React.createElement(“div”, { style: { position: “fixed”, top: 16, right: 16, zIndex: 9999, background: notif.type === “err” ? “#3a1010” : “#103a20”, border: `1px solid ${notif.type === "err" ? "#ff4444" : "#44cc88"}`, color: notif.type === “err” ? “#ff8888” : “#88ffbb”, padding: “9px 16px”, borderRadius: 8, fontSize: 11, boxShadow: “0 4px 20px rgba(0,0,0,.5)”, animation: “fadeIn .25s” } }, notif.msg),
React.createElement(“div”, { style: { background: “linear-gradient(180deg,#1a0f06,transparent)”, borderBottom: “1px solid #2a1e12”, padding: “16px 22px”, display: “flex”, alignItems: “center”, justifyContent: “space-between”, flexWrap: “wrap”, gap: 10 } },
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, gap: 10 } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, letterSpacing: 4, color: “#c8964e”, textTransform: “uppercase” } }, “LicorPro”),
React.createElement(“div”, { style: { fontSize: 18, fontWeight: 400, letterSpacing: 2 } }, “\uD83C\uDF7E Inventario”)),
React.createElement(“div”, { style: { background: “rgba(68,204,136,.12)”, border: “1px solid rgba(68,204,136,.3)”, borderRadius: 20, padding: “3px 10px”, fontSize: 10, color: “#44cc88” } },
“\uD83D\uDC64 “,
user)),
React.createElement(“div”, { style: { display: “flex”, gap: 4, background: “rgba(0,0,0,.3)”, borderRadius: 9, padding: 3, border: “1px solid #2a1e12” } }, [[“inventory”, “📦 Inventario”], [“distributors”, “🏢 Distribuidoras”], [“orders”, “📋 Pedidos”]].map(([v, l]) => (React.createElement(“button”, { key: v, onClick: () => setView(v), style: { background: view === v ? “#c8964e” : “transparent”, border: “none”, borderRadius: 6, padding: “5px 11px”, color: view === v ? “#0a0704” : “#8a7a6a”, fontSize: 10, cursor: “pointer”, fontWeight: view === v ? 700 : 400, whiteSpace: “nowrap” } }, l)))),
React.createElement(“div”, { style: { display: “flex”, gap: 6 } },
view === “inventory” && React.createElement(React.Fragment, null,
React.createElement(“button”, { onClick: () => setShowAdd(true), style: S.btn(”#c8964e”) }, “+ Producto”),
React.createElement(“button”, { onClick: getAI, style: S.btn(”#6e8ec8”) }, “\uD83E\uDD16 IA”)),
view === “distributors” && React.createElement(“button”, { onClick: () => { setEditDistId(null); setNewDist({ name: “”, short: “”, phone: “”, email: “”, rep: “”, repPhone: “”, categories: [], color: “#c8964e”, notes: “” }); setShowDistM(true); }, style: S.btn(”#c8964e”) }, “+ Distribuidora”),
React.createElement(“button”, { onClick: logout, style: S.btn(”#2a1e12”, “#8a7a6a”) }, “Salir”))),
view === “inventory” && (React.createElement(“div”, null,
React.createElement(“div”, { style: { display: “flex”, gap: 9, padding: “14px 22px”, flexWrap: “wrap” } }, [{ l: “Stock Activo”, v: tStock, c: “#44cc88” }, { l: “Backup”, v: tBackup, c: “#c8964e” }, { l: “Productos”, v: inv.length, c: “#6e8ec8” }, { l: “Bajo Mínimo”, v: nLow, c: nLow > 0 ? “#ff4444” : “#44cc88” }].map((s, i) => (React.createElement(“div”, { key: i, style: { flex: “1 1 110px”, background: “rgba(255,255,255,.03)”, border: “1px solid #2a1e12”, borderRadius: 9, padding: “11px 14px” } },
React.createElement(“div”, { style: { fontSize: 8, color: “#8a7a6a”, letterSpacing: 1, textTransform: “uppercase” } }, s.l),
React.createElement(“div”, { style: { fontSize: 24, fontWeight: 700, color: s.c, lineHeight: 1.15, marginTop: 2 } }, s.v))))),
crits.length > 0 && React.createElement(“div”, { style: { margin: “0 22px 8px”, background: “rgba(255,68,68,.07)”, border: “1px solid rgba(255,68,68,.3)”, borderRadius: 8, padding: “5px 12px”, display: “flex”, alignItems: “center”, gap: 8, flexWrap: “wrap” } },
React.createElement(“span”, { style: { fontSize: 9, color: “#ff6666”, fontWeight: 700, whiteSpace: “nowrap” } },
“\u26A0\uFE0F CR\u00CDTICO (”,
crits.length,
“)”),
React.createElement(“div”, { style: { display: “flex”, gap: 4, flexWrap: “wrap” } }, crits.map(i => React.createElement(“span”, { key: i.id, style: { fontSize: 9, color: “#ffaaaa” } },
i.emoji,
“ “,
i.name,
“: “,
i.stock)).reduce((a, b) => […a, React.createElement(“span”, { key: b.key + “s”, style: { color: “#3a1a1a” } }, “\u00B7”), b], []).slice(1))),
React.createElement(“div”, { style: { padding: “0 22px 10px”, display: “flex”, gap: 8, flexWrap: “wrap”, alignItems: “center” } },
React.createElement(“input”, { value: search, onChange: e => setSearch(e.target.value), placeholder: “Buscar…”, style: { …S.input, width: 150, padding: “5px 10px”, fontSize: 11 } }),
React.createElement(“div”, { style: { display: “flex”, gap: 3, flexWrap: “wrap” } }, CATS.map(c => React.createElement(“button”, { key: c, onClick: () => setFilter(c), style: { background: filter === c ? (CAT_CLR[c] || “#c8964e”) : “rgba(255,255,255,.04)”, border: `1px solid ${filter === c ? "transparent" : "#2a1e12"}`, borderRadius: 20, padding: “2px 8px”, color: filter === c ? “#0a0704” : “#8a7a6a”, fontSize: 8, cursor: “pointer”, fontWeight: filter === c ? 700 : 400, whiteSpace: “nowrap” } },
c !== “Todos” && CAT_EMO[c],
“ “,
c)))),
React.createElement(“div”, { style: { padding: “0 22px” } },
React.createElement(“div”, { style: { background: “rgba(255,255,255,.02)”, border: “1px solid #2a1e12”, borderRadius: 11, overflow: “hidden” } },
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “2fr 1fr 1fr 1fr 1fr 1fr 1fr”, background: “#120c06”, padding: “7px 13px”, fontSize: 7, color: “#6a5a4a”, letterSpacing: 1.5, textTransform: “uppercase”, borderBottom: “1px solid #2a1e12” } },
React.createElement(“div”, null, “Producto”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Stock”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Backup”),
React.createElement(“div”,
{ style: { textAlign: “center” } }, “Min\u270F\uFE0F”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Ciclo”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Estado”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Acciones”)),
filt.map((it, idx) => {
const st = stStatus(it);
const tr = it.trend === “up” ? “↗” : it.trend === “down” ? “↘” : “→”;
const tc = it.trend === “up” ? “#44cc88” : it.trend === “down” ? “#ff6666” : “#c8964e”;
const d = dists.find(d => d.id === it.distId);
const cycles = calcCycles(it.history);
const hasHistory = it.history && it.history.length > 0;
return (React.createElement(“div”, { key: it.id, style: { display: “grid”, gridTemplateColumns: “2fr 1fr 1fr 1fr 1fr 1fr 1fr”, padding: “9px 13px”, borderBottom: idx < filt.length - 1 ? “1px solid #1a1208” : “none”, alignItems: “center”, background: it.stock <= it.par ? “rgba(255,68,68,.025)” : “transparent” } },
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, gap: 7 } },
React.createElement(“span”, { style: { fontSize: 17 } }, it.emoji),
React.createElement(“div”, null,
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, gap: 5 } },
React.createElement(“div”, { style: { fontSize: 11, color: “#f0e6d0”, fontWeight: 500 } }, it.name),
React.createElement(“button”, { onClick: () => { setManualDate(””); setManualType(“arrived”); setManualQty(””); setManualNote(””); setManualErr(””); setTimelineItem(it); }, title: “Registrar fecha / Ver historial”, style: { background: “rgba(110,181,200,.12)”, border: “1px solid rgba(110,181,200,.25)”, borderRadius: 10, color: “#6eb5c8”, fontSize: 7, cursor: “pointer”, padding: “0px 5px”, lineHeight: “15px”, whiteSpace: “nowrap” } },
“\uD83D\uDCC5 “,
it.history && it.history.length > 0 ? `${it.history.length} eventos` : “+ fecha”)),
React.createElement(“div”, { style: { display: “flex”, gap: 4, alignItems: “center”, marginTop: 1, flexWrap: “wrap” } },
React.createElement(“span”, { style: { fontSize: 8, color: CAT_CLR[it.category] || “#8a7a6a” } },
it.category,
“\u00B7”,
it.unit),
d && React.createElement(“span”, { style: { fontSize: 7, background: `${d.color}22`, border: `1px solid ${d.color}44`, color: d.color, borderRadius: 9, padding: “0 4px” } }, d.short),
it.lastArrived && React.createElement(“span”, { style: { fontSize: 7, color: “#44cc88” } },
“\uD83D\uDCE6 “,
it.lastArrived),
it.lastRetired && React.createElement(“span”, { style: { fontSize: 7, color: “#ffaa00” } },
“\uD83D\uDDD1\uFE0F “,
it.lastRetired),
it.lastFinished && React.createElement(“span”, { style: { fontSize: 7, color: “#ff8888” } },
“\uD83D\uDD34 “,
it.lastFinished)))),
React.createElement(“div”, { style: { textAlign: “center” } },
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, justifyContent: “center”, gap: 2 } },
React.createElement(“button”, { onClick: () => adjStock(it.id, -1), style: S.mini }, “\u2212”),
React.createElement(“span”, { style: { fontSize: 13, fontWeight: 700, color: st.c, minWidth: 22, textAlign: “center” } }, it.stock),
React.createElement(“button”, { onClick: () => adjStock(it.id, 1), style: S.mini }, “+”))),
React.createElement(“div”, { style: { textAlign: “center” } },
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, justifyContent: “center”, gap: 2 } },
React.createElement(“button”, { onClick: () => adjBackup(it.id, -1), style: S.mini }, “\u2212”),
React.createElement(“span”, { style: { fontSize: 13, fontWeight: 700, color: “#c8964e”, minWidth: 22, textAlign: “center” } }, it.backup),
React.createElement(“button”, { onClick: () => adjBackup(it.id, 1), style: S.mini }, “+”))),
React.createElement(“div”, { style: { textAlign: “center” } }, editParId === it.id ? React.createElement(“input”, { type: “number”, value: editParV, onChange: e => setEditParV(e.target.value), onBlur: () => commitPar(it.id), onKeyDown: e => { if (e.key === “Enter”)
commitPar(it.id); if (e.key === “Escape”)
setEditParId(null); }, autoFocus: true, style: { width: 34, background: “#1a1208”, border: “1px solid #c8964e”, borderRadius: 4, color: “#f0e6d0”, fontSize: 11, textAlign: “center”, padding: “1px 2px”, outline: “none” } }) : React.createElement(“button”, { onClick: () => { setEditParId(it.id); setEditParV(String(it.par)); }, style: { background: “rgba(200,150,78,.1)”, border: “1px dashed #c8964e44”, borderRadius: 4, color: “#c8964e”, fontSize: 11, fontWeight: 700, cursor: “pointer”, padding: “1px 6px” } },
it.par,
React.createElement(“span”, { style: { fontSize: 6, opacity: .5 } }, “ \u270F\uFE0F”))),
React.createElement(“div”, { style: { textAlign: “center” } }, cycles.avgDays > 0
? React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 10, fontWeight: 700, color: “#6eb5c8” } },
cycles.avgDays,
“d”),
React.createElement(“div”, { style: { fontSize: 7, color: “#4a6a7a” } },
cycles.cycles,
“ ciclo”,
cycles.cycles !== 1 ? “s” : “”))
: React.createElement(“span”, { style: { fontSize: 10, color: tc } },
tr,
it.velocity)),
React.createElement(“div”, { style: { textAlign: “center” } },
React.createElement(“span”, { style: { background: `${st.c}22`, border: `1px solid ${st.c}55`, color: st.c, borderRadius: 20, padding: “1px 6px”, fontSize: 7, fontWeight: 700 } }, st.l)),
React.createElement(“div”, { style: { textAlign: “center”, display: “flex”, flexDirection: “column”, gap: 3, alignItems: “center” } },
React.createElement(“div”, { style: { display: “flex”, gap: 3 } },
React.createElement(“button”, { onClick: () => markArrived(it.id), title: “Registrar llegada hoy”, style: { background: “rgba(68,204,136,.12)”, border: “1px solid rgba(68,204,136,.3)”, color: “#44cc88”, borderRadius: 4, padding: “2px 5px”, cursor: “pointer”, fontSize: 8, lineHeight: 1.4 } }, “\uD83D\uDCE6”),
React.createElement(“button”, { onClick: () => { setRetireItem(it); setRetireQty(“1”); setRetireReason(””); }, title: “Retirar producto”, style: { background: “rgba(255,170,0,.1)”, border: “1px solid rgba(255,170,0,.3)”, color: “#ffaa44”, borderRadius: 4, padding: “2px 5px”, cursor: “pointer”, fontSize: 8, lineHeight: 1.4 } }, “\uD83D\uDDD1\uFE0F”),
React.createElement(“button”, { onClick: () => markFinished(it.id), title: “Marcar como agotado”, style: { background: “rgba(255,68,68,.1)”, border: “1px solid rgba(255,68,68,.3)”, color: “#ff8888”, borderRadius: 4, padding: “2px 5px”, cursor: “pointer”, fontSize: 8, lineHeight: 1.4 } }, “\uD83D\uDD34”),
React.createElement(“button”, { onClick: () => delItem(it.id), title: “Eliminar producto”, style: { background: “rgba(255,68,68,.05)”, border: “1px solid rgba(255,68,68,.2)”, color: “#ff6666”, borderRadius: 4, padding: “2px 5px”, cursor: “pointer”, fontSize: 8, lineHeight: 1.4 } }, “\u2715”)))));
}),
filt.length === 0 && React.createElement(“div”, { style: { textAlign: “center”, padding: “32px”, color: “#4a3a2a”, fontSize: 11 } }, “Sin resultados”))),
showAI && React.createElement(“div”, { style: { margin: “14px 22px 0” } },
React.createElement(“div”, { style: { background: “linear-gradient(135deg,#0d0a1a,#0a0f1a)”, border: “1px solid #2a2a4a”, borderRadius: 11, padding: 16 } },
React.createElement(“div”, { style: { display: “flex”, justifyContent: “space-between”, marginBottom: 10 } },
React.createElement(“div”, { style: { fontSize: 13, color: “#c8d4f0” } }, “\uD83E\uDD16 An\u00E1lisis IA”),
React.createElement(“button”, { onClick: () => setShowAI(false), style: { background: “none”, border: “none”, color: “#4a4a6a”, cursor: “pointer”, fontSize: 14 } }, “\u2715”)),
aiLoading ? React.createElement(“div”, { style: { textAlign: “center”, padding: “20px”, color: “#6e8ec8”, fontSize: 12 } }, “\u23F3 Analizando…”) : React.createElement(“div”, null, aiText.split(”\n”).map((l, i) => l.startsWith(”### “) ? React.createElement(“div”, { key: i, style: { color: “#c8964e”, fontWeight: 700, fontSize: 11, marginTop: 10, textTransform: “uppercase” } }, l.replace(”### “, “”)) : React.createElement(“div”, { key: i, style: { color: “#c8b99a”, fontSize: 11, lineHeight: 1.6 } }, l))))))),
view === “distributors” && (React.createElement(“div”, { style: { padding: “16px 22px” } },
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “repeat(auto-fill,minmax(290px,1fr))”, gap: 10 } }, dists.map(d => {
const di = inv.filter(i => i.distId === d.id);
return (React.createElement(“div”, { key: d.id, style: { background: “rgba(255,255,255,.025)”, border: `1px solid ${d.color}44`, borderRadius: 12 } },
React.createElement(“div”, { style: { background: `linear-gradient(135deg,${d.color}22,transparent)`, borderBottom: `1px solid ${d.color}22`, padding: “12px 14px”, display: “flex”, justifyContent: “space-between”, alignItems: “flex-start” } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 8, letterSpacing: 2, color: d.color, textTransform: “uppercase”, marginBottom: 2 } }, “Distribuidora”),
React.createElement(“div”, { style: { fontSize: 14, fontWeight: 600, color: “#f0e6d0” } }, d.name),
React.createElement(“div”, { style: { fontSize: 9, color: “#8a7a6a” } },
di.length,
“ productos”)),
React.createElement(“div”, { style: { display: “flex”, gap: 4 } },
React.createElement(“button”, { onClick: () => { setEditDistId(d.id); setNewDist({ …d }); setShowDistM(true); }, style: { background: `${d.color}22`, border: `1px solid ${d.color}44`, color: d.color, borderRadius: 4, padding: “2px 7px”, cursor: “pointer”, fontSize: 9 } }, “\u270F\uFE0F”),
React.createElement(“button”, { onClick: () => delDist(d.id), style: { background: “rgba(255,68,68,.1)”, border: “1px solid rgba(255,68,68,.3)”, color: “#ff6666”, borderRadius: 4, padding: “2px 7px”, cursor: “pointer”, fontSize: 9 } }, “\u2715”))),
React.createElement(“div”, { style: { padding: “10px 14px” } },
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 7, marginBottom: 8 } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 7, color: “#6a5a4a”, letterSpacing: 1, marginBottom: 2 } }, “TELEFONO”),
React.createElement(“a”, { href: `tel:${d.phone}`, style: { fontSize: 10, color: “#c8d4f0”, textDecoration: “none” } },
“\uD83D\uDCDE “,
d.phone)),
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 7, color: “#6a5a4a”, letterSpacing: 1, marginBottom: 2 } }, “EMAIL”),
React.createElement(“a”, { href: `mailto:${d.email}`, style: { fontSize: 9, color: “#c8d4f0”, textDecoration: “none”, wordBreak: “break-all” } },
“\u2709\uFE0F “,
d.email))),
d.rep && React.createElement(“div”, { style: { marginBottom: 7 } },
React.createElement(“div”, { style: { fontSize: 7, color: “#6a5a4a”, letterSpacing: 1, marginBottom: 1 } }, “REP”),
React.createElement(“div”, { style: { fontSize: 10, color: “#f0e6d0” } },
d.rep,
d.repPhone && React.createElement(React.Fragment, null,
“ \u00B7 “,
React.createElement(“a”, { href: `tel:${d.repPhone}`, style: { color: “#c8d4f0”, textDecoration: “none” } }, d.repPhone)))),
d.notes && React.createElement(“div”, { style: { fontSize: 9, color: “#8a7a6a”, background: “rgba(255,255,255,.03)”, borderRadius: 6, padding: “5px 8px”, borderLeft: `2px solid ${d.color}55`, marginBottom: 8 } },
“\uD83D\uDCDD “,
d.notes),
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “1fr 1fr 1fr”, gap: 4 } },
React.createElement(“a”, { href: `tel:${d.phone}`, style: { background: `${d.color}22`, border: `1px solid ${d.color}44`, color: d.color, borderRadius: 6, padding: “6px 3px”, fontSize: 9, fontWeight: 600, textAlign: “center”, textDecoration: “none”, display: “block” } }, “\uD83D\uDCDE Llamar”),
React.createElement(“a”, { href: `mailto:${d.email}?subject=Pedido de Inventario`, style: { background: “rgba(110,181,200,.1)”, border: “1px solid rgba(110,181,200,.3)”, color: “#6eb5c8”, borderRadius: 6, padding: “6px 3px”, fontSize: 9, fontWeight: 600, textAlign: “center”, textDecoration: “none”, display: “block” } }, “\u2709\uFE0F Email”),
React.createElement(“button”, { onClick: () => { setActiveDist(d.id); setView(“orders”); }, style: { background: “rgba(68,204,136,.1)”, border: “1px solid rgba(68,204,136,.3)”, color: “#44cc88”, borderRadius: 6, padding: “6px 3px”, fontSize: 9, fontWeight: 600, cursor: “pointer” } }, “\uD83D\uDCE6 Pedido”)))));
})))),
view === “orders” && (React.createElement(“div”, { style: { padding: “16px 22px” } },
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “200px 1fr”, gap: 12, alignItems: “start” } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 8, letterSpacing: 2, color: “#8a7a6a”, marginBottom: 7, textTransform: “uppercase” } }, “Distribuidora”),
dists.map(d => (React.createElement(“button”, { key: d.id, onClick: () => { setActiveDist(d.id); setOrderQ({}); setAiOrderLines([]); }, style: { width: “100%”, background: activeDist === d.id ? `${d.color}2a` : “rgba(255,255,255,.03)”, border: `1px solid ${activeDist === d.id ? d.color : "#2a1e12"}`, borderRadius: 8, padding: “8px 10px”, cursor: “pointer”, textAlign: “left”, marginBottom: 4, transition: “all .2s” } },
React.createElement(“div”, { style: { fontSize: 10, fontWeight: 600, color: activeDist === d.id ? d.color : “#f0e6d0” } }, d.short || d.name),
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginTop: 1 } },
inv.filter(i => i.distId === d.id).length,
“ productos”)))),
orders.length > 0 && React.createElement(React.Fragment, null,
React.createElement(“div”, { style: { fontSize: 8, letterSpacing: 2, color: “#8a7a6a”, margin: “12px 0 5px”, textTransform: “uppercase” } }, “Guardados”),
orders.slice(0, 5).map(o => React.createElement(“div”, { key: o.id, style: { background: “rgba(255,255,255,.03)”, border: “1px solid #2a1e12”, borderRadius: 7, padding: “7px 9px”, marginBottom: 4 } },
React.createElement(“div”, { style: { fontSize: 9, color: “#f0e6d0”, fontWeight: 600 } }, o.distName),
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a” } },
o.date,
“ \u00B7 “,
o.total,
“u.”))))),
!activeDist
? React.createElement(“div”, { style: { background: “rgba(255,255,255,.02)”, border: “1px solid #2a1e12”, borderRadius: 11, padding: “44px”, textAlign: “center”, color: “#4a3a2a”, fontSize: 12 } }, “\uD83D\uDCCB Selecciona una distribuidora”)
: (() => {
const d = dists.find(d => d.id === activeDist);
return (React.createElement(“div”, null,
React.createElement(“div”, { style: { display: “flex”, justifyContent: “space-between”, alignItems: “flex-start”, marginBottom: 10, flexWrap: “wrap”, gap: 7 } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 8, letterSpacing: 2, color: d.color, textTransform: “uppercase”, marginBottom: 1 } }, “Nuevo Pedido”),
React.createElement(“div”, { style: { fontSize: 15, color: “#f0e6d0”, fontWeight: 500 } }, d.name),
React.createElement(“div”, { style: { fontSize: 9, color: “#6a5a4a” } }, d.notes)),
React.createElement(“div”, { style: { display: “flex”, gap: 5 } },
React.createElement(“button”, { onClick: aiOrder, disabled: aiOrderLoading, style: { …S.btn(d.color), fontSize: 10, opacity: aiOrderLoading ? .5 : 1 } }, aiOrderLoading ? “⏳ Generando…” : “🤖 Auto IA”),
React.createElement(“button”, { onClick: saveOrder, style: { …S.btn(”#44cc88”), fontSize: 10 } }, “\uD83D\uDCBE Guardar”))),
aiOrderLines.length > 0 && React.createElement(“div”, { style: { background: “rgba(110,181,200,.07)”, border: “1px solid rgba(110,181,200,.2)”, borderRadius: 8, padding: “9px 11px”, marginBottom: 9 } },
React.createElement(“div”, { style: { fontSize: 7, color: “#6e8ec8”, letterSpacing: 2, marginBottom: 4 } }, “SUGERENCIA IA”),
aiOrderLines.map((l, i) => React.createElement(“div”, { key: i, style: { fontSize: 10, color: “#c8d4f0”, lineHeight: 1.6 } },
“\u2022 “,
React.createElement(“b”, null, l.name),
“: “,
l.qty,
“u \u2014 “,
React.createElement(“span”, { style: { color: “#8a8a9a” } }, l.reason)))),
React.createElement(“input”, { value: orderNote, onChange: e => setOrderNote(e.target.value), placeholder: “Nota (opcional)…”, style: { …S.input, width: “100%”, boxSizing: “border-box”, marginBottom: 8, padding: “6px 10px”, fontSize: 10 } }),
React.createElement(“div”, { style: { background: “rgba(255,255,255,.02)”, border: “1px solid #2a1e12”, borderRadius: 10, overflow: “hidden” } },
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “2fr 1fr 1fr 1fr 1.2fr”, background: “#120c06”, padding: “6px 12px”, fontSize: 7, color: “#6a5a4a”, letterSpacing: 1.5, textTransform: “uppercase”, borderBottom: “1px solid #2a1e12” } },
React.createElement(“div”, null, “Producto”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Stock”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Min”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Estado”),
React.createElement(“div”, { style: { textAlign: “center” } }, “Pedir”)),
distInv.length === 0 && React.createElement(“div”, { style: { textAlign: “center”, padding: “24px”, color: “#4a3a2a”, fontSize: 10 } }, “Sin productos asignados”),
distInv.map((it, idx) => {
const st = stStatus(it);
const qty = orderQ[it.id] || 0;
return (React.createElement(“div”, { key: it.id, style: { display: “grid”, gridTemplateColumns: “2fr 1fr 1fr 1fr 1.2fr”, padding: “8px 12px”, borderBottom: idx < distInv.length - 1 ? “1px solid #1a1208” : “none”, alignItems: “center”, background: qty > 0 ? “rgba(68,204,136,.04)” : “transparent” } },
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, gap: 6 } },
React.createElement(“span”, { style: { fontSize: 15 } }, it.emoji),
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 10, color: “#f0e6d0” } }, it.name),
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a” } }, it.unit))),
React.createElement(“div”, { style: { textAlign: “center”, fontSize: 12, fontWeight: 700, color: st.c } }, it.stock),
React.createElement(“div”, { style: { textAlign: “center”, fontSize: 10, color: “#8a7a6a” } }, it.par),
React.createElement(“div”, { style: { textAlign: “center” } },
React.createElement(“span”, { style: { background: `${st.c}22`, border: `1px solid ${st.c}55`, color: st.c, borderRadius: 20, padding: “1px 5px”, fontSize: 7, fontWeight: 700 } }, st.l)),
React.createElement(“div”, { style: { textAlign: “center” } },
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, justifyContent: “center”, gap: 2 } },
React.createElement(“button”, { onClick: () => setOrderQ(p => ({ …p, [it.id]: Math.max(0, (p[it.id] || 0) - 1) })), style: S.mini }, “\u2212”),
React.createElement(“span”, { style: { fontSize: 13, fontWeight: 700, color: qty > 0 ? “#44cc88” : “#4a3a2a”, minWidth: 22, textAlign: “center” } }, qty),
React.createElement(“button”, { onClick: () => setOrderQ(p => ({ …p, [it.id]: (p[it.id] || 0) + 1 })), style: S.mini }, “+”)))));
})),
oTotal > 0 && React.createElement(“div”, { style: { marginTop: 7, textAlign: “right”, fontSize: 11, color: “#44cc88”, fontWeight: 600 } },
“Total: “,
oTotal,
“ unidades”)));
})()))),
showAdd && (React.createElement(“div”, { style: { position: “fixed”, inset: 0, background: “rgba(0,0,0,.88)”, zIndex: 200, display: “flex”, alignItems: “center”, justifyContent: “center” } },
React.createElement(“div”, { style: { background: “#150f08”, border: “1px solid #3a2a1a”, borderRadius: 13, padding: 22, width: 340, boxShadow: “0 20px 60px rgba(0,0,0,.8)”, maxHeight: “90vh”, overflowY: “auto” } },
React.createElement(“div”, { style: { fontSize: 14, marginBottom: 14, color: “#c8964e” } }, “+ A\u00F1adir Producto”),
[[“Nombre”, “name”, “text”], [“Unidad”, “unit”, “text”], [“Stock”, “stock”, “number”], [“Backup”, “backup”, “number”], [“Minimo”, “par”, “number”]].map(([l, k, t]) => (React.createElement(“div”, { key: k, style: { marginBottom: 8 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 2 } }, l),
React.createElement(“input”, { type: t, value: newItem[k], onChange: e => setNewItem(p => ({ …p, [k]: t === “number” ? +e.target.value : e.target.value })), style: { …S.input, width: “100%”, boxSizing: “border-box”, fontSize: 11, padding: “5px 8px” } })))),
React.createElement(“div”, { style: { marginBottom: 8 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 2 } }, “Categoria”),
React.createElement(“select”, { value: newItem.category, onChange: e => setNewItem(p => ({ …p, category: e.target.value, unit: UNIT_DEF[e.target.value] || “” })), style: { width: “100%”, background: “#1a1208”, border: “1px solid #2a1e12”, borderRadius: 6, padding: “5px 8px”, color: “#f0e6d0”, fontSize: 11, outline: “none” } }, CATS.filter(c => c !== “Todos”).map(c => React.createElement(“option”, { key: c, value: c },
CAT_EMO[c] || “”,
“ “,
c)))),
React.createElement(“div”, { style: { marginBottom: 14 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 2 } }, “Distribuidora”),
React.createElement(“select”, { value: newItem.distId, onChange: e => setNewItem(p => ({ …p, distId: +e.target.value })), style: { width: “100%”, background: “#1a1208”, border: “1px solid #2a1e12”, borderRadius: 6, padding: “5px 8px”, color: “#f0e6d0”, fontSize: 11, outline: “none” } },
React.createElement(“option”, { value: “” }, “\u2014 Sin asignar \u2014”),
dists.map(d => React.createElement(“option”, { key: d.id, value: d.id }, d.name)))),
React.createElement(“div”, { style: { display: “flex”, gap: 6 } },
React.createElement(“button”, { onClick: addItem, style: S.btn(”#c8964e”) }, “A\u00F1adir”),
React.createElement(“button”, { onClick: () => setShowAdd(false), style: S.btn(”#2a1e12”, “#8a7a6a”) }, “Cancelar”))))),
showDistM && (React.createElement(“div”, { style: { position: “fixed”, inset: 0, background: “rgba(0,0,0,.88)”, zIndex: 200, display: “flex”, alignItems: “center”, justifyContent: “center” } },
React.createElement(“div”, { style: { background: “#150f08”, border: “1px solid #3a2a1a”, borderRadius: 13, padding: 22, width: 380, boxShadow: “0 20px 60px rgba(0,0,0,.8)”, maxHeight: “92vh”, overflowY: “auto” } },
React.createElement(“div”, { style: { fontSize: 14, marginBottom: 14, color: “#c8964e” } },
editDistId ? “✏️ Editar” : “+ Nueva”,
“ Distribuidora”),
[[“Nombre”, “name”, “text”], [“Nombre corto”, “short”, “text”], [“Telefono”, “phone”, “tel”], [“Email”, “email”, “email”], [“Representante”, “rep”, “text”], [“Tel. Rep”, “repPhone”, “tel”]].map(([l, k, t]) => (React.createElement(“div”, { key: k, style: { marginBottom: 8 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 2 } }, l),
React.createElement(“input”, { type: t, value: newDist[k] || “”, onChange: e => setNewDist(p => ({ …p, [k]: e.target.value })), style: { …S.input, width: “100%”, boxSizing: “border-box”, fontSize: 11, padding: “5px 8px” } })))),
React.createElement(“div”, { style: { marginBottom: 8 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 4 } }, “Categorias”),
React.createElement(“div”, { style: { display: “flex”, flexWrap: “wrap”, gap: 3 } }, CATS.filter(c => c !== “Todos”).map(c => { const sel = newDist.categories?.includes(c); return React.createElement(“button”, { key: c, onClick: () => setNewDist(p => ({ …p, categories: sel ? p.categories.filter(x => x !== c) : […(p.categories || []), c] })), style: { background: sel ? (CAT_CLR[c] || “#888”) : “rgba(255,255,255,.05)”, border: `1px solid ${sel ? CAT_CLR[c] || "#888" : "#2a1e12"}`, borderRadius: 20, padding: “2px 8px”, color: sel ? “#0a0704” : “#6a5a4a”, fontSize: 8, cursor: “pointer” } },
CAT_EMO[c] || “”,
“ “,
c); }))),
React.createElement(“div”, { style: { marginBottom: 8 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 4 } }, “Color”),
React.createElement(“div”, { style: { display: “flex”, gap: 4, flexWrap: “wrap” } }, PALETTE.map(c => React.createElement(“button”, { key: c, onClick: () => setNewDist(p => ({ …p, color: c })), style: { width: 20, height: 20, borderRadius: “50%”, background: c, border: newDist.color === c ? “3px solid #fff” : “2px solid transparent”, cursor: “pointer”, padding: 0 } })))),
React.createElement(“div”, { style: { marginBottom: 14 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#6a5a4a”, marginBottom: 2 } }, “Notas”),
React.createElement(“textarea”, { value: newDist.notes || “”, onChange: e => setNewDist(p => ({ …p, notes: e.target.value })), rows: 2, style: { width: “100%”, background: “rgba(255,255,255,.05)”, border: “1px solid #2a1e12”, borderRadius: 6, padding: “5px 8px”, color: “#f0e6d0”, fontSize: 10, outline: “none”, resize: “vertical”, boxSizing: “border-box” } })),
React.createElement(“div”, { style: { display: “flex”, gap: 6 } },
React.createElement(“button”, { onClick: saveDist, style: S.btn(”#c8964e”) }, editDistId ? “Guardar” : “Añadir”),
React.createElement(“button”, { onClick: () => setShowDistM(false), style: S.btn(”#2a1e12”, “#8a7a6a”) }, “Cancelar”))))),
timelineItem && (React.createElement(“div”, { style: { position: “fixed”, inset: 0, background: “rgba(0,0,0,.9)”, zIndex: 300, display: “flex”, alignItems: “center”, justifyContent: “center”, padding: 16 }, onClick: () => setTimelineItem(null) },
React.createElement(“div”, { style: { background: “#0d0a06”, border: “1px solid #2a1e12”, borderRadius: 16, width: “100%”, maxWidth: 500, maxHeight: “90vh”, overflowY: “auto”, boxShadow: “0 30px 80px rgba(0,0,0,.8)” }, onClick: e => e.stopPropagation() },
React.createElement(“div”, { style: { padding: “18px 20px 14px”, borderBottom: “1px solid #1e1208”, display: “flex”, justifyContent: “space-between”, alignItems: “center”, position: “sticky”, top: 0, background: “#0d0a06”, zIndex: 1 } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, letterSpacing: 3, color: “#c8964e”, textTransform: “uppercase”, marginBottom: 3 } }, “Rastreo de Ciclos”),
React.createElement(“div”, { style: { fontSize: 16, color: “#f0e6d0”, fontWeight: 500 } },
timelineItem.emoji,
“ “,
timelineItem.name)),
React.createElement(“button”, { onClick: () => setTimelineItem(null), style: { background: “none”, border: “none”, color: “#6a5a4a”, cursor: “pointer”, fontSize: 20, lineHeight: 1 } }, “\u2715”)),
React.createElement(“div”, { style: { padding: “16px 20px” } },
(() => {
const cyc = calcCycles(timelineItem.history);
if (cyc.avgDays > 0) {
const daysLeft = timelineItem.lastArrived
? Math.max(0, cyc.avgDays - Math.round((Date.now() - new Date(timelineItem.lastArrived)) / 86400000))
: null;
return (React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “repeat(4,1fr)”, gap: 7, marginBottom: 18 } }, [
{ l: “Ciclo prom.”, v: `${cyc.avgDays}d`, c: “#6eb5c8” },
{ l: “Ciclos reales”, v: cyc.cycles, c: “#44cc88” },
{ l: “Vel. real”, v: `${parseFloat((timelineItem.par / cyc.avgDays * 7).toFixed(1))}/sem`, c: “#c8964e” },
{ l: “Días restantes”, v: daysLeft !== null ? `~${daysLeft}d` : “—”, c: daysLeft !== null && daysLeft <= 3 ? “#ff4444” : “#ffaa00” },
].map((s, i) => (React.createElement(“div”, { key: i, style: { background: “rgba(255,255,255,.03)”, border: “1px solid #1e1208”, borderRadius: 8, padding: “9px 10px”, textAlign: “center” } },
React.createElement(“div”, { style: { fontSize: 7, color: “#6a5a4a”, letterSpacing: 1, textTransform: “uppercase”, marginBottom: 3 } }, s.l),
React.createElement(“div”, { style: { fontSize: 14, fontWeight: 700, color: s.c } }, s.v))))));
}
return null;
})(),
React.createElement(“div”, { style: { background: “rgba(110,181,200,.06)”, border: “1px solid rgba(110,181,200,.2)”, borderRadius: 11, padding: “14px 16px”, marginBottom: 16 } },
React.createElement(“div”, { style: { fontSize: 9, letterSpacing: 2, color: “#6eb5c8”, textTransform: “uppercase”, marginBottom: 12 } }, “\uD83D\uDCC5 Registrar Fecha Manualmente”),
React.createElement(“div”, { style: { display: “flex”, gap: 5, marginBottom: 12 } }, [
[“arrived”, “📦 Llegó”, “rgba(68,204,136,.15)”, “rgba(68,204,136,.4)”, “#44cc88”],
[“retired”, “🗑️ Retirado”, “rgba(255,170,0,.12)”, “rgba(255,170,0,.4)”, “#ffaa44”],
[“finished”, “🔴 Agotado”, “rgba(255,68,68,.1)”, “rgba(255,68,68,.4)”, “#ff8888”],
].map(([val, label, bg, border, clr]) => (React.createElement(“button”, { key: val, onClick: () => setManualType(val), style: { flex: 1, background: manualType === val ? bg : “rgba(255,255,255,.03)”, border: `1px solid ${manualType === val ? border : "#1e1208"}`, borderRadius: 8, padding: “7px 4px”, cursor: “pointer”, color: manualType === val ? clr : “#6a5a4a”, fontSize: 10, fontWeight: manualType === val ? 700 : 400, transition: “all .2s” } }, label)))),
React.createElement(“div”, { style: { marginBottom: 10 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#4a6a7a”, letterSpacing: 1, textTransform: “uppercase”, marginBottom: 4 } }, “Fecha”),
React.createElement(“input”, { type: “date”, value: manualDate, onChange: e => { setManualDate(e.target.value); setManualErr(””); }, max: new Date().toISOString().split(“T”)[0], style: { width: “100%”, boxSizing: “border-box”, background: “rgba(255,255,255,.05)”, border: “1px solid #2a1e12”, borderRadius: 7, padding: “8px 10px”, color: “#f0e6d0”, fontSize: 12, outline: “none”, colorScheme: “dark” } })),
(manualType === “arrived” || manualType === “retired”) && (React.createElement(“div”, { style: { marginBottom: 10 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#4a6a7a”, letterSpacing: 1, textTransform: “uppercase”, marginBottom: 4 } }, manualType === “arrived” ? “Cantidad que llegó” : “Cantidad retirada”),
React.createElement(“input”, { type: “number”, value: manualQty, onChange: e => setManualQty(e.target.value), placeholder: `Ej: ${timelineItem.par}`, min: 1, style: { width: “100%”, boxSizing: “border-box”, background: “rgba(255,255,255,.05)”, border: “1px solid #2a1e12”, borderRadius: 7, padding: “8px 10px”, color: “#f0e6d0”, fontSize: 12, outline: “none” } }))),
React.createElement(“div”, { style: { marginBottom: 12 } },
React.createElement(“div”, { style: { fontSize: 8, color: “#4a6a7a”, letterSpacing: 1, textTransform: “uppercase”, marginBottom: 4 } }, “Nota (opcional)”),
React.createElement(“input”, { type: “text”, value: manualNote, onChange: e => setManualNote(e.target.value), placeholder: “Ej: lleg\u00F3 con el pedido de Southern, evento especial…”, style: { width: “100%”, boxSizing: “border-box”, background: “rgba(255,255,255,.05)”, border: “1px solid #2a1e12”, borderRadius: 7, padding: “8px 10px”, color: “#f0e6d0”, fontSize: 11, outline: “none” } })),
manualErr && React.createElement(“div”, { style: { color: “#ff6666”, fontSize: 10, marginBottom: 8, background: “rgba(255,68,68,.08)”, borderRadius: 6, padding: “4px 8px” } },
“\u26A0\uFE0F “,
manualErr),
React.createElement(“button”, { onClick: addManualEntry, style: { width: “100%”, background: “#6eb5c8”, border: “none”, borderRadius: 8, padding: “9px”, color: “#06080a”, fontSize: 12, fontWeight: 700, cursor: “pointer” } }, “Guardar fecha”)),
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “1fr 1fr 1fr”, gap: 6, marginBottom: 16 } },
React.createElement(“button”, { onClick: () => { markArrived(timelineItem.id); const updated = inv.find(i => i.id === timelineItem.id); if (updated)
setTimelineItem({ …updated }); }, style: { background: “rgba(68,204,136,.1)”, border: “1px solid rgba(68,204,136,.25)”, color: “#44cc88”, borderRadius: 8, padding: “8px 4px”, cursor: “pointer”, fontSize: 9, fontWeight: 600 } }, “\uD83D\uDCE6 Lleg\u00F3 hoy”),
React.createElement(“button”, { onClick: () => { setTimelineItem(null); setRetireItem(timelineItem); setRetireQty(“1”); setRetireReason(””); }, style: { background: “rgba(255,170,0,.08)”, border: “1px solid rgba(255,170,0,.25)”, color: “#ffaa44”, borderRadius: 8, padding: “8px 4px”, cursor: “pointer”, fontSize: 9, fontWeight: 600 } }, “\uD83D\uDDD1\uFE0F Retirar hoy”),
React.createElement(“button”, { onClick: () => { markFinished(timelineItem.id); const updated = inv.find(i => i.id === timelineItem.id); if (updated)
setTimelineItem({ …updated }); }, style: { background: “rgba(255,68,68,.08)”, border: “1px solid rgba(255,68,68,.25)”, color: “#ff8888”, borderRadius: 8, padding: “8px 4px”, cursor: “pointer”, fontSize: 9, fontWeight: 600 } }, “\uD83D\uDD34 Agot\u00F3 hoy”)),
React.createElement(“div”, { style: { fontSize: 9, letterSpacing: 2, color: “#6a5a4a”, textTransform: “uppercase”, marginBottom: 10 } }, “Historial de eventos”),
(!timelineItem.history || timelineItem.history.length === 0)
? React.createElement(“div”, { style: { textAlign: “center”, padding: “24px”, color: “#3a2a1a”, fontSize: 11, border: “1px dashed #2a1e12”, borderRadius: 10 } },
“Sin eventos a\u00FAn.”,
React.createElement(“br”, null),
React.createElement(“span”, { style: { fontSize: 9, color: “#2a1a0a” } }, “Registra una fecha arriba para empezar a rastrear el patr\u00F3n.”))
: React.createElement(“div”, { style: { position: “relative” } },
React.createElement(“div”, { style: { position: “absolute”, left: 15, top: 0, bottom: 0, width: 2, background: “linear-gradient(180deg,#c8964e33,transparent)”, borderRadius: 1 } }),
[…timelineItem.history].reverse().map((ev, i) => {
const isArr = ev.type === “arrived”, isRet = ev.type === “retired”;
const clr = isArr ? “#44cc88” : isRet ? “#ffaa44” : “#ff8888”;
const bdr = isArr ? “rgba(68,204,136,.2)” : isRet ? “rgba(255,170,0,.2)” : “rgba(255,68,68,.12)”;
const lbl = isArr ? “📦 Llegada” : isRet ? “🗑️ Retirado” : “🔴 Agotado”;
return (React.createElement(“div”, { key: i, style: { display: “flex”, alignItems: “flex-start”, gap: 10, marginBottom: 10, position: “relative” } },
React.createElement(“div”, { style: { width: 30, height: 30, borderRadius: “50%”, background: isArr ? “rgba(68,204,136,.18)” : isRet ? “rgba(255,170,0,.12)” : “rgba(255,68,68,.12)”, border: `2px solid ${clr}`, display: “flex”, alignItems: “center”, justifyContent: “center”, fontSize: 12, flexShrink: 0, zIndex: 1 } }, isArr ? “📦” : isRet ? “🗑️” : “🔴”),
React.createElement(“div”, { style: { flex: 1, background: “rgba(255,255,255,.025)”, border: `1px solid ${bdr}`, borderRadius: 8, padding: “8px 11px” } },
React.createElement(“div”, { style: { display: “flex”, justifyContent: “space-between”, alignItems: “flex-start”, gap: 8 } },
React.createElement(“div”, { style: { fontSize: 11, fontWeight: 600, color: clr } },
lbl,
ev.manual && React.createElement(“span”, { style: { fontSize: 8, color: “#4a6a7a”, marginLeft: 5, fontWeight: 400 } }, “(manual)”)),
React.createElement(“div”, { style: { fontSize: 9, color: “#c8964e”, fontWeight: 600, whiteSpace: “nowrap” } }, ev.date)),
React.createElement(“div”, { style: { fontSize: 9, color: “#8a7a6a”, marginTop: 3 } },
ev.ts && ev.ts !== “manual” && React.createElement(React.Fragment, null,
React.createElement(“span”, { style: { color: “#5a6a7a” } }, ev.ts),
“ \u00B7 “),
“Por: “,
React.createElement(“span”, { style: { color: “#c8d0d8” } }, ev.user),
ev.qty ? React.createElement(React.Fragment, null,
“ \u00B7 “,
React.createElement(“span”, { style: { color: clr, fontWeight: 600 } }, ev.qty),
“ unidad”,
ev.qty !== 1 ? “es” : “”) : ev.stock !== undefined && isArr ? React.createElement(React.Fragment, null,
“ \u00B7 Stock: “,
React.createElement(“span”, { style: { color: “#44cc88”, fontWeight: 600 } }, ev.stock)) : “”),
ev.note && React.createElement(“div”, { style: { fontSize: 9, color: “#7a8a6a”, marginTop: 3, fontStyle: “italic” } },
“"”,
ev.note,
“"”))));
})))))),
retireItem && (React.createElement(“div”, { style: { position: “fixed”, inset: 0, background: “rgba(0,0,0,.88)”, zIndex: 300, display: “flex”, alignItems: “center”, justifyContent: “center”, padding: 16 }, onClick: () => setRetireItem(null) },
React.createElement(“div”, { style: { background: “#100c06”, border: “1px solid #3a2a0a”, borderRadius: 14, width: “100%”, maxWidth: 380, boxShadow: “0 24px 70px rgba(0,0,0,.8)”, overflow: “hidden” }, onClick: e => e.stopPropagation() },
React.createElement(“div”, { style: { background: “linear-gradient(135deg,rgba(255,170,0,.12),transparent)”, borderBottom: “1px solid rgba(255,170,0,.15)”, padding: “16px 18px”, display: “flex”, justifyContent: “space-between”, alignItems: “center” } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, letterSpacing: 3, color: “#ffaa44”, textTransform: “uppercase”, marginBottom: 2 } }, “Registrar Retiro”),
React.createElement(“div”, { style: { fontSize: 15, color: “#f0e6d0”, fontWeight: 500 } },
retireItem.emoji,
“ “,
retireItem.name),
React.createElement(“div”, { style: { fontSize: 9, color: “#8a7a6a”, marginTop: 1 } },
“Stock actual: “,
React.createElement(“span”, { style: { color: “#f0e6d0”, fontWeight: 600 } }, retireItem.stock),
“ unidades”)),
React.createElement(“button”, { onClick: () => setRetireItem(null), style: { background: “none”, border: “none”, color: “#6a5a4a”, cursor: “pointer”, fontSize: 18, lineHeight: 1 } }, “\u2715”)),
React.createElement(“div”, { style: { padding: “16px 18px” } },
React.createElement(“div”, { style: { marginBottom: 14 } },
React.createElement(“div”, { style: { fontSize: 9, color: “#8a7a6a”, letterSpacing: 1, textTransform: “uppercase”, marginBottom: 5 } }, “Cantidad retirada”),
React.createElement(“div”, { style: { display: “flex”, alignItems: “center”, gap: 8 } },
React.createElement(“button”, { onClick: () => setRetireQty(q => String(Math.max(1, parseInt(q || 1) - 1))), style: { …S.mini, width: 28, height: 28, fontSize: 16 } }, “\u2212”),
React.createElement(“input”, { type: “number”, value: retireQty, onChange: e => setRetireQty(e.target.value), min: 1, max: retireItem.stock, style: { flex: 1, background: “rgba(255,255,255,.06)”, border: “1px solid rgba(255,170,0,.3)”, borderRadius: 8, padding: “9px 12px”, color: “#f0e6d0”, fontSize: 16, fontWeight: 700, textAlign: “center”, outline: “none” } }),
React.createElement(“button”, { onClick: () => setRetireQty(q => String(Math.min(retireItem.stock, parseInt(q || 1) + 1))), style: { …S.mini, width: 28, height: 28, fontSize: 16 } }, “+”)),
React.createElement(“div”, { style: { fontSize: 9, color: “#6a5a4a”, marginTop: 5, textAlign: “center” } },
“Stock restante: “,
React.createElement(“span”, { style: { color: retireItem.stock - (parseInt(retireQty) || 1) <= retireItem.par ? “#ff8888” : “#f0e6d0”, fontWeight: 600 } }, Math.max(0, retireItem.stock - (parseInt(retireQty) || 1))),
“ unidades”)),
React.createElement(“div”, { style: { marginBottom: 16 } },
React.createElement(“div”, { style: { fontSize: 9, color: “#8a7a6a”, letterSpacing: 1, textTransform: “uppercase”, marginBottom: 5 } },
“Raz\u00F3n del retiro “,
React.createElement(“span”, { style: { color: “#4a3a2a”, fontWeight: 400 } }, “(opcional)”)),
React.createElement(“div”, { style: { display: “flex”, gap: 5, flexWrap: “wrap”, marginBottom: 8 } }, [“Vencido”, “Roto/dañado”, “Muestra”, “Consumo interno”, “Otro”].map(r => (React.createElement(“button”, { key: r, onClick: () => setRetireReason(r), style: { background: retireReason === r ? “rgba(255,170,0,.2)” : “rgba(255,255,255,.04)”, border: `1px solid ${retireReason === r ? "rgba(255,170,0,.4)" : "#2a1e12"}`, borderRadius: 20, padding: “3px 9px”, color: retireReason === r ? “#ffaa44” : “#6a5a4a”, fontSize: 9, cursor: “pointer”, fontWeight: retireReason === r ? 600 : 400 } }, r)))),
React.createElement(“input”, { type: “text”, value: retireReason, onChange: e => setRetireReason(e.target.value), placeholder: “O escribe una raz\u00F3n…”, style: { …S.input, width: “100%”, boxSizing: “border-box”, fontSize: 11, padding: “6px 9px” } })),
React.createElement(“div”, { style: { background: “rgba(255,170,0,.06)”, border: “1px solid rgba(255,170,0,.15)”, borderRadius: 8, padding: “9px 11px”, marginBottom: 14, fontSize: 9, color: “#8a7a6a”, lineHeight: 1.6 } },
“\uD83D\uDDD1\uFE0F Esto reducir\u00E1 el stock en “,
React.createElement(“span”, { style: { color: “#ffaa44”, fontWeight: 600 } }, parseInt(retireQty) || 1),
“ unidad”,
(parseInt(retireQty) || 1) !== 1 ? “es” : “”,
“ y registrar\u00E1 la fecha de hoy (”,
React.createElement(“span”, { style: { color: “#c8964e” } }, dateNow()),
“) en el historial del producto.”),
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 8 } },
React.createElement(“button”, { onClick: async () => {
await markRetired(retireItem.id, parseInt(retireQty) || 1, retireReason);
setRetireItem(null);
}, style: { background: “rgba(255,170,0,.18)”, border: “1px solid rgba(255,170,0,.4)”, color: “#ffaa44”, borderRadius: 9, padding: “10px”, cursor: “pointer”, fontSize: 12, fontWeight: 700 } }, “\uD83D\uDDD1\uFE0F Confirmar retiro”),
React.createElement(“button”, { onClick: () => setRetireItem(null), style: { background: “rgba(255,255,255,.04)”, border: “1px solid #2a1e12”, color: “#8a7a6a”, borderRadius: 9, padding: “10px”, cursor: “pointer”, fontSize: 12 } }, “Cancelar”)))))),
React.createElement(“style”, null, `@keyframes fadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}} button:hover{opacity:.82} input::placeholder,textarea::placeholder{color:#3a4a5a} input[type="date"]::-webkit-calendar-picker-indicator{filter:invert(.6)}`)));
}
// ═══════════════════════════════════════════════════════════════════════════════
// ADMIN APP
// ═══════════════════════════════════════════════════════════════════════════════
function AdminApp({ pin, adminUser, staff, isSuperAdmin, onPin, onAdminUser, onStaff, onLogout }) {
const [tab, setTab] = useState(“live”);
const [logs, setLogs] = useState([]);
const [active, setActive] = useState({});
const [inv, setInv] = useState([]);
const [dists, setDists] = useState([]);
const [loading, setLoading] = useState(true);
const [filterUser, setFUser] = useState(“Todos”);
const [filterType, setFType] = useState(“Todos”);
// PIN change
const [showPin, setShowPin] = useState(false);
const [pUser, setPUser] = useState(””);
const [pCur, setPCur] = useState(””);
const [pNew, setPNew] = useState(””);
const [pConf, setPConf] = useState(””);
const [pErr, setPErr] = useState(””);
const [pOk, setPOk] = useState(false);
// Staff
const [newSName, setNewSName] = useState(””);
const [sErr, setSErr] = useState(””);
// Shopping list
const [thresh, setThresh] = useState(2);
const [copied, setCopied] = useState(false);
const pollRef = useRef(null);
const refresh = useCallback(async () => {
const [l, u, i, d] = await Promise.all([
shGet(“lp:logs”, []),
shGet(“lp:active”, {}),
shGet(“lp:inventory”, INIT_INV),
shGet(“lp:distributors”, INIT_DISTS),
]);
const now = Date.now();
const fresh = Object.fromEntries(Object.entries(u).filter(([, v]) => now - v.lastSeen < 60000));
setLogs(l);
setActive(fresh);
setInv(i);
setDists(d);
setLoading(false);
}, []);
useEffect(() => { refresh(); pollRef.current = setInterval(refresh, POLL_MS); return () => clearInterval(pollRef.current); }, [refresh]);
// PIN / credential change
const doChangePin = async () => {
setPErr(””);
setPOk(false);
// Validate current PIN
if (!pCur) {
setPErr(“Escribe el PIN actual”);
return;
}
if (pCur !== pin) {
setPErr(`PIN incorrecto. El PIN actual es el que usaste para entrar.`);
return;
}
// Need at least one change
const hasNewUser = pUser.trim().length > 0;
const hasNewPin = pNew.trim().length > 0;
if (!hasNewUser && !hasNewPin) {
setPErr(“Escribe un nuevo usuario y/o un nuevo PIN”);
