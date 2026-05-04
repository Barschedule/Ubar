“use strict”;

// ── CONSTANTS ──────────────────────────────────────────────────────────────
const DEFAULT_PIN = “1234”;
const SUPER_ADMIN = “Fabinho”;

const INIT_INV = [
// ── WHISKY / SCOTCH / BOURBON ──
{ id: 1,  name: “Jameson”,                category: “Whisky”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.5, trend: “up”,     emoji: “🥃”, distId: 1 },
{ id: 2,  name: “Jim Beam”,               category: “Whisky”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.2, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 3,  name: “Monkey’s Shoulder”,      category: “Whisky”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.8, trend: “up”,     emoji: “🥃”, distId: 1 },
{ id: 4,  name: “Wild Turkey”,            category: “Whisky”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.5, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 5,  name: “Grant’s Triple Wood”,    category: “Whisky”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.2, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 6,  name: “Blended Single Malt Scotch”, category: “Whisky”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.0, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 7,  name: “Crown Royal Woods”,      category: “Whisky”,  unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 1.8, trend: “stable”, emoji: “🥃”, distId: 1 },
{ id: 8,  name: “Crown Royal Apple”,      category: “Whisky”,  unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “up”,     emoji: “🥃”, distId: 1 },
{ id: 9,  name: “Crown Royal Beach”,      category: “Whisky”,  unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 1.6, trend: “up”,     emoji: “🥃”, distId: 1 },
{ id: 10, name: “Makers Mark”,            category: “Whisky”,  unit: “750ml”, stock: 3, backup: 3, par: 3, velocity: 3.8, trend: “up”,     emoji: “🥃”, distId: 1 },
{ id: 11, name: “Basil Hayden”,           category: “Whisky”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.3, trend: “up”,     emoji: “🥃”, distId: 1 },
{ id: 12, name: “Fireball”,               category: “Licores”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 4.5, trend: “up”,     emoji: “🔥”, distId: 1 },
// ── COGNAC ──
{ id: 13, name: “Hennessy”,               category: “Cognac”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “up”,     emoji: “🍷”, distId: 1 },
{ id: 14, name: “Martell Cordon Bleu”,    category: “Cognac”,  unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 1.8, trend: “stable”, emoji: “🍷”, distId: 1 },
// ── VODKA ──
{ id: 15, name: “House Vodka”,            category: “Vodka”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 5.0, trend: “up”,     emoji: “🍸”, distId: 1 },
{ id: 16, name: “Grey Goose”,             category: “Vodka”,   unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 3.5, trend: “up”,     emoji: “🍸”, distId: 1 },
{ id: 17, name: “Tito’s”,                 category: “Vodka”,   unit: “750ml”, stock: 4, backup: 4, par: 4, velocity: 6.2, trend: “up”,     emoji: “🍸”, distId: 1 },
{ id: 18, name: “New Amsterdam Vodka”,    category: “Vodka”,   unit: “750ml”, stock: 3, backup: 3, par: 3, velocity: 4.5, trend: “up”,     emoji: “🍸”, distId: 1 },
{ id: 19, name: “Kettle One”,             category: “Vodka”,   unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “stable”, emoji: “🍸”, distId: 1 },
{ id: 20, name: “Watermelon Basil Vodka”, category: “Vodka”,   unit: “750ml”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “up”,     emoji: “🍸”, distId: 1 },
// ── GIN ──
{ id: 21, name: “Bombay Sapphire”,        category: “Gin”,     unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.8, trend: “stable”, emoji: “🫙”, distId: 1 },
{ id: 22, name: “Hendricks”,              category: “Gin”,     unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 2.5, trend: “up”,     emoji: “🫙”, distId: 1 },
// ── RON ──
{ id: 23, name: “House Rum”,              category: “Ron”,     unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 4.5, trend: “up”,     emoji: “🍹”, distId: 2 },
{ id: 24, name: “Malibu Pink”,            category: “Licores”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.2, trend: “up”,     emoji: “🌸”, distId: 2 },
// ── TEQUILA ──
{ id: 25, name: “House Tequila”,          category: “Tequila”, unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 4.8, trend: “up”,     emoji: “🌵”, distId: 2 },
{ id: 26, name: “Julio Blanco”,           category: “Tequila”, unit: “750ml”, stock: 2, backup: 2, par: 2, velocity: 3.5, trend: “up”,     emoji: “🌵”, distId: 2 },
// ── VINO ──
{ id: 27, name: “Copper Ridge Cabernet”,      category: “Vino”, unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “stable”, emoji: “🍷”, distId: 3 },
{ id: 28, name: “Chateau Ste Michelle Riesling”, category: “Vino”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🥂”, distId: 3 },
{ id: 29, name: “Chateau Ste Michelle Cabernet”, category: “Vino”, unit: “case”, stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🍷”, distId: 3 },
{ id: 30, name: “Pinot Noir”,             category: “Vino”,   unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 2.5, trend: “up”,     emoji: “🍷”, distId: 3 },
{ id: 31, name: “Sauvignon Blanc”,        category: “Vino”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 1.8, trend: “stable”, emoji: “🥂”, distId: 3 },
// ── MIXERS / JUGOS ──
{ id: 32, name: “Grenadine”,             category: “Jugos”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🍒”, distId: 5 },
{ id: 33, name: “Margarita Mix”,         category: “Jugos”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 2.5, trend: “up”,     emoji: “🍋”, distId: 5 },
{ id: 34, name: “Bloody Mary Mix”,       category: “Jugos”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 1.5, trend: “stable”, emoji: “🍅”, distId: 5 },
{ id: 35, name: “Piña Colada Mix”,       category: “Jugos”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 1.8, trend: “stable”, emoji: “🍍”, distId: 5 },
{ id: 36, name: “Jugo de Naranja”,       category: “Jugos”,   unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 3.0, trend: “up”,     emoji: “🍊”, distId: 5 },
{ id: 37, name: “Jugo de Cranberry”,     category: “Jugos”,   unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 2.8, trend: “stable”, emoji: “🫐”, distId: 5 },
{ id: 38, name: “Sweet & Sour Mix”,      category: “Jugos”,   unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 2.0, trend: “stable”, emoji: “🍋”, distId: 5 },
// ── CERVEZA ──
{ id: 39, name: “Bud Light”,             category: “Cerveza”, unit: “case”,  stock: 3, backup: 3, par: 3, velocity: 6.0, trend: “up”,     emoji: “🍺”, distId: 4 },
{ id: 40, name: “Budweiser”,             category: “Cerveza”, unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 4.5, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 41, name: “Coors Light”,           category: “Cerveza”, unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 4.0, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 42, name: “Miller Lite”,           category: “Cerveza”, unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 3.8, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 43, name: “Corona”,               category: “Cerveza”, unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 4.2, trend: “up”,     emoji: “🍺”, distId: 4 },
{ id: 44, name: “Modelo Especial”,      category: “Cerveza”, unit: “case”,  stock: 2, backup: 2, par: 2, velocity: 4.5, trend: “up”,     emoji: “🍺”, distId: 4 },
{ id: 45, name: “Heineken”,             category: “Cerveza”, unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 3.0, trend: “stable”, emoji: “🍺”, distId: 4 },
{ id: 46, name: “Blue Moon”,            category: “Cerveza”, unit: “case”,  stock: 1, backup: 1, par: 1, velocity: 2.5, trend: “stable”, emoji: “🍺”, distId: 4 },
];

const INIT_DISTS = [
{ id: 1, name: “Southern Glazer’s”, short: “SGW”,  phone: “816-555-0101”, email: “orders@sgws.com”,     rep: “Mike Johnson”,   repPhone: “816-555-0201”, categories: [“Whisky”,“Cognac”,“Vodka”,“Gin”,“Licores”], color: “#c8964e”, notes: “Pedido mínimo $500” },
{ id: 2, name: “Charmer Sunbelt”,   short: “CS”,   phone: “816-555-0102”, email: “orders@charmer.com”,  rep: “Sarah Williams”, repPhone: “816-555-0202”, categories: [“Ron”,“Tequila”],                          color: “#6ab04c”, notes: “Entrega martes y viernes” },
{ id: 3, name: “Republic National”, short: “RN”,   phone: “816-555-0103”, email: “orders@rndc.com”,     rep: “David Chen”,     repPhone: “816-555-0203”, categories: [“Vino”],                                   color: “#eb4d4b”, notes: “Pedido antes del miércoles” },
{ id: 4, name: “Anheuser-Busch”,    short: “AB”,   phone: “816-555-0104”, email: “orders@abinbev.com”,  rep: “Tom Rodriguez”,  repPhone: “816-555-0204”, categories: [“Cerveza”],                                color: “#f0932b”, notes: “Entrega lunes” },
{ id: 5, name: “Sysco”,             short: “SYS”,  phone: “816-555-0105”, email: “orders@sysco.com”,    rep: “Lisa Park”,      repPhone: “816-555-0205”, categories: [“Jugos”,“Mixers”],                         color: “#686de0”, notes: “Pedido mínimo $200” },
];

// ── STORAGE HELPERS ────────────────────────────────────────────────────────
function lsGet(key, def) {
try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; }
}
function lsSet(key, val) {
try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ── DATE HELPERS ───────────────────────────────────────────────────────────
function dateNow() { return new Date().toLocaleDateString(“en-US”); }
function tsNow()   { return Date.now(); }
function fmtDate(d) {
return new Date(d + “T12:00:00”).toLocaleDateString(“es-US”, { month: “short”, day: “numeric”, year: “numeric” });
}

// ── STYLE HELPERS ──────────────────────────────────────────────────────────
const S = {
btn: (bg, color = “#f0ead6”) => ({
background: bg, color, border: “none”, borderRadius: 6,
padding: “8px 14px”, cursor: “pointer”, fontSize: 12, fontWeight: 600,
letterSpacing: 1, textTransform: “uppercase”
}),
card: { background: “rgba(255,255,255,.03)”, border: “1px solid #1a2a3a”, borderRadius: 10, padding: 14, marginBottom: 10 },
inputD: { background: “rgba(255,255,255,.04)”, border: “1px solid #1e2d3d”, borderRadius: 7, color: “#d0c8b0”, padding: “10px 12px” },
badge: (c) => ({ background: c + “22”, color: c, border: `1px solid ${c}44`, borderRadius: 12, padding: “2px 8px”, fontSize: 10, fontWeight: 700, letterSpacing: 1 }),
};

// ── UPSERT USER (heartbeat) ────────────────────────────────────────────────
function upsertUser(name) {
if (!name) return;
const users = lsGet(“lp:active_users”, {});
users[name] = { name, lastSeen: tsNow() };
lsSet(“lp:active_users”, users);
}

// ── APPEND LOG ─────────────────────────────────────────────────────────────
function appendLog(entry) {
const logs = lsGet(“lp:logs”, []);
logs.unshift({ …entry, ts: tsNow(), date: dateNow() });
if (logs.length > 500) logs.length = 500;
lsSet(“lp:logs”, logs);
}

// ── ACT CONSTANTS ──────────────────────────────────────────────────────────
const ACT = { STOCK: “stock”, LOGIN: “login”, ORDER: “order”, ADD: “add”, DELETE: “delete”, EDIT: “edit” };

// ══════════════════════════════════════════════════════════════════════════════
// LOGIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
function Login({ pin, adminUser, staff, onLogin }) {
const [name, setName]     = useState(””);
const [pw, setPw]         = useState(””);
const [mode, setMode]     = useState(“user”);
const [err, setErr]       = useState(””);
const hasStaff = staff && staff.length > 0;

const go = async () => {
setErr(””);
if (mode === “admin”) {
if (pw !== pin) { setErr(“PIN incorrecto”); return; }
const loginName = adminUser || “Admin”;
const isSuper = loginName.toLowerCase() === SUPER_ADMIN.toLowerCase();
onLogin(loginName, true, isSuper);
} else {
const n = name.trim();
if (!n) { setErr(“Escribe tu nombre”); return; }
if (!hasStaff) { setErr(“Acceso bloqueado. Contacta al administrador.”); return; }
const match = staff.find(s => s.toLowerCase() === n.toLowerCase());
if (!match) { setErr(“Nombre no autorizado. Verifica con el administrador.”); return; }
appendLog({ user: match, type: ACT.LOGIN, detail: “Accedió al inventario”, item: “–” });
upsertUser(match);
onLogin(match, false, false);
}
};

return React.createElement(“div”, { style: { minHeight: “100vh”, background: “linear-gradient(135deg,#06080a,#0d1117,#06080a)”, display: “flex”, alignItems: “center”, justifyContent: “center”, fontFamily: “Georgia,serif” } },
React.createElement(“div”, { style: { width: 340, background: “rgba(255,255,255,.03)”, border: “1px solid #1e2830”, borderRadius: 18, padding: “36px 30px”, boxShadow: “0 30px 80px rgba(0,0,0,.7)” } },
React.createElement(“div”, { style: { textAlign: “center”, marginBottom: 28 } },
React.createElement(“div”, { style: { fontSize: 40, marginBottom: 8 } }, “🥃”),
React.createElement(“div”, { style: { fontSize: 22, letterSpacing: 3, color: “#f0e6d0”, fontWeight: 400 } }, “LicorPro”),
React.createElement(“div”, { style: { fontSize: 10, letterSpacing: 4, color: “#4a5a6a”, textTransform: “uppercase”, marginTop: 4 } }, “Sistema de Inventario”),
),
React.createElement(“div”, { style: { display: “flex”, background: “rgba(0,0,0,.3)”, borderRadius: 9, padding: 3, marginBottom: 20 } },
[“user”,“admin”].map(m => React.createElement(“button”, { key: m, onClick: () => { setMode(m); setErr(””); setPw(””); setName(””); }, style: { flex: 1, background: mode === m ? “#1e3040” : “none”, border: mode === m ? “1px solid #2a4a60” : “1px solid transparent”, borderRadius: 7, padding: “7px 0”, color: mode === m ? “#c8964e” : “#4a6a7a”, fontSize: 11, letterSpacing: 2, cursor: “pointer”, textTransform: “uppercase” } }, m === “user” ? “Empleado” : “Admin”)),
),
mode === “user”
? React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, color: “#3a5a6a”, letterSpacing: 2, marginBottom: 6, textTransform: “uppercase” } }, “Tu nombre”),
React.createElement(“input”, { value: name, onChange: e => { setName(e.target.value); setErr(””); }, onKeyDown: e => e.key === “Enter” && go(), type: “text”, placeholder: “Ej: Morgan”, style: { …S.inputD, width: “100%”, boxSizing: “border-box”, marginBottom: 14 }, autoFocus: true }),
)
: React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, color: “#3a5a6a”, letterSpacing: 2, marginBottom: 6, textTransform: “uppercase” } }, “PIN de administrador”),
React.createElement(“input”, { value: pw, onChange: e => { setPw(e.target.value); setErr(””); }, onKeyDown: e => e.key === “Enter” && go(), type: “password”, placeholder: “••••”, style: { …S.inputD, width: “100%”, boxSizing: “border-box”, marginBottom: 14, letterSpacing: 6 }, autoFocus: true }),
),
err && React.createElement(“div”, { style: { color: “#ff6666”, fontSize: 11, marginBottom: 10, textAlign: “center” } }, err),
React.createElement(“button”, { onClick: go, style: { …S.btn(”#c8964e”, “#06080a”), width: “100%”, padding: “11px 0”, fontSize: 12, letterSpacing: 3 } }, “Acceder →”),
hasStaff && mode === “user” && React.createElement(“div”, { style: { marginTop: 14, fontSize: 9, color: “#2a3a4a”, textAlign: “center”, letterSpacing: 1 } },
“Acceso autorizado: “ + staff.join(”, “)
),
)
);
}
// ══════════════════════════════════════════════════════════════════════════════
// INVENTORY APP - MAIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
function InvApp({ user, isAdmin, isSuper, onLogout }) {
const [inv, setInv]               = useState(null);
const [dists, setDists]           = useState(null);
const [view, setView]             = useState(“inventory”);
const [filter, setFilter]         = useState(“Todos”);
const [search, setSearch]         = useState(””);
const [notif, setNotif]           = useState(null);
const [showAdd, setShowAdd]       = useState(false);
const [newItem, setNewItem]       = useState({ name: “”, category: “Cerveza”, unit: “case”, stock: 0, backup: 0, par: 2, distId: 1 });
const [editId, setEditId]         = useState(null);
const [editVals, setEditVals]     = useState({});
const [retireItem, setRetireItem] = useState(null);
const [retireQty, setRetireQty]   = useState(“1”);
const [retireReason, setRetireReason] = useState(””);
const [histItem, setHistItem]     = useState(null);
const [activeTab, setActiveTab]   = useState(“inventory”);
const hbRef = useRef(null);

// Load data
useEffect(() => {
const inv_ = lsGet(“lp:inventory”, null) || INIT_INV;
const dist_ = lsGet(“lp:distributors”, null) || INIT_DISTS;
if (!lsGet(“lp:inventory”, null)) lsSet(“lp:inventory”, inv_);
if (!lsGet(“lp:distributors”, null)) lsSet(“lp:distributors”, dist_);
setInv(inv_);
setDists(dist_);
hbRef.current = setInterval(() => upsertUser(user), 15000);
upsertUser(user);
return () => clearInterval(hbRef.current);
}, [user]);

const toast = (msg, type = “ok”) => {
setNotif({ msg, type });
setTimeout(() => setNotif(null), 3000);
};

const saveInv = (next) => { setInv(next); lsSet(“lp:inventory”, next); };
const saveDists = (next) => { setDists(next); lsSet(“lp:distributors”, next); };

const adjStock = (id, d) => {
if (!inv) return;
const it = inv.find(i => i.id === id);
const newStock = Math.max(0, it.stock + d);
const history = it.history ? […it.history] : [];
if (newStock === 0 && it.stock > 0) {
history.push({ type: “finished”, date: dateNow(), ts: tsNow(), user, stock: 0 });
}
if (it.stock === 0 && newStock > 0) {
history.push({ type: “arrived”, date: dateNow(), ts: tsNow(), user, stock: newStock });
}
const updates = { stock: newStock, history };
const nx = inv.map(i => i.id === id ? { …i, …updates } : i);
saveInv(nx);
appendLog({ user, type: ACT.STOCK, item: it.name, detail: `${d > 0 ? "+" : ""}${d} → stock:${newStock}` });
if (newStock === 0) toast(`⚠️ ${it.name} se agotó`, “err”);
else if (newStock <= it.backup) toast(`📦 ${it.name}: stock bajo (${newStock})`, “warn”);
};

const markRetired = (id, qty = 1, reason = “”) => {
if (!inv) return;
const it = inv.find(i => i.id === id);
const newStock = Math.max(0, it.stock - qty);
const history = it.history ? […it.history] : [];
history.push({ type: “retired”, date: dateNow(), ts: tsNow(), user, qty, reason: reason || undefined, stock: newStock });
if (newStock === 0) history.push({ type: “finished”, date: dateNow(), ts: tsNow(), user, stock: 0 });
const nx = inv.map(i => i.id === id ? { …i, stock: newStock, history } : i);
saveInv(nx);
appendLog({ user, type: ACT.STOCK, item: it.name, detail: `Retirado: ${qty} unidad${qty !== 1 ? "es" : ""} → stock:${newStock}${reason ? " (" + reason + ")" : ""}` });
toast(`🗑️ ${it.name}: ${qty} retirada${qty !== 1 ? "s" : ""}`, “err”);
setRetireItem(null); setRetireQty(“1”); setRetireReason(””);
};

const markArrived = (id) => {
if (!inv) return;
const it = inv.find(i => i.id === id);
const history = it.history ? […it.history] : [];
history.push({ type: “arrived”, date: dateNow(), ts: tsNow(), user, stock: it.stock });
const nx = inv.map(i => i.id === id ? { …i, history } : i);
saveInv(nx);
toast(`📦 Llegada de ${it.name} registrada`);
};

const calcCycles = (history) => {
if (!history || history.length < 2) return { avgDays: 0, cycles: 0 };
const arrivals = history.filter(h => h.type === “arrived”);
const finishes = history.filter(h => h.type === “finished”);
if (arrivals.length === 0 || finishes.length === 0) return { avgDays: 0, cycles: 0 };
const pairs = [];
arrivals.forEach(a => {
const finish = finishes.find(f => new Date(f.date + “,” + f.ts) > new Date(a.date + “,” + a.ts));
if (finish) {
const days = Math.max(1, Math.round((new Date(finish.date) - new Date(a.date)) / 86400000));
pairs.push(days);
}
});
if (pairs.length === 0) return { avgDays: 0, cycles: 0 };
const avgDays = Math.round(pairs.reduce((a, b) => a + b, 0) / pairs.length);
return { avgDays, cycles: pairs.length };
};

// ── CATEGORIES ──
const cats = [“Todos”, …([…new Set((inv || []).map(i => i.category))])];

// ── FILTERED ──
const filtered = (inv || []).filter(i => {
const matchCat = filter === “Todos” || i.category === filter;
const matchSearch = i.name.toLowerCase().includes(search.toLowerCase());
return matchCat && matchSearch;
});

const criticals = (inv || []).filter(i => i.stock <= i.backup);

if (!inv) return React.createElement(“div”, { style: { color: “#c8964e”, textAlign: “center”, padding: 40 } }, “Cargando…”);

// ── NAV ──
const tabs = [
{ id: “inventory”, label: “Inventario”, emoji: “📦” },
{ id: “orders”,    label: “Pedidos”,    emoji: “📋” },
{ id: “dists”,     label: “Proveedores”,emoji: “🚚” },
{ id: “logs”,      label: “Registro”,   emoji: “📝” },
…(isAdmin ? [{ id: “admin”, label: “Admin”, emoji: “⚙️” }] : []),
];

return React.createElement(“div”, { style: { minHeight: “100vh”, background: “#06080a”, fontFamily: “Georgia,serif”, color: “#c0b898” } },

```
// TOAST
notif && React.createElement("div", { style: { position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 9999, background: notif.type === "err" ? "rgba(255,68,68,.9)" : notif.type === "warn" ? "rgba(200,150,78,.9)" : "rgba(44,204,136,.9)", color: "#fff", padding: "10px 20px", borderRadius: 20, fontSize: 13, fontWeight: 600, boxShadow: "0 4px 20px rgba(0,0,0,.5)", maxWidth: 320, textAlign: "center" } }, notif.msg),

// HEADER
React.createElement("div", { style: { background: "rgba(0,0,0,.6)", borderBottom: "1px solid #1a2830", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 } },
  React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
    React.createElement("div", { style: { fontSize: 22 } }, "🥃"),
    React.createElement("div", null,
      React.createElement("div", { style: { fontSize: 13, color: "#c8964e", letterSpacing: 2, fontWeight: 600 } }, "LICORPRO"),
      React.createElement("div", { style: { fontSize: 9, color: "#3a5060", letterSpacing: 1 } }, user + (isAdmin ? " · Admin" : "")),
    ),
  ),
  React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } },
    criticals.length > 0 && React.createElement("div", { style: { background: "rgba(255,68,68,.15)", border: "1px solid rgba(255,68,68,.3)", borderRadius: 20, padding: "3px 10px", fontSize: 10, color: "#ff6666", fontWeight: 700 } }, `⚠️ ${criticals.length} bajo`),
    React.createElement("button", { onClick: onLogout, style: { ...S.btn("#1a2830", "#4a6070"), fontSize: 10 } }, "Salir"),
  ),
),

// NAV TABS
React.createElement("div", { style: { display: "flex", background: "rgba(0,0,0,.4)", borderBottom: "1px solid #1a2830", overflowX: "auto" } },
  tabs.map(t => React.createElement("button", { key: t.id, onClick: () => setActiveTab(t.id), style: { flex: 1, minWidth: 70, padding: "10px 4px", background: activeTab === t.id ? "rgba(200,150,78,.1)" : "none", border: "none", borderBottom: activeTab === t.id ? "2px solid #c8964e" : "2px solid transparent", color: activeTab === t.id ? "#c8964e" : "#3a5060", fontSize: 9, letterSpacing: 1, cursor: "pointer", textTransform: "uppercase", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 } },
    React.createElement("span", { style: { fontSize: 16 } }, t.emoji),
    t.label,
  )),
),

// CONTENT
React.createElement("div", { style: { padding: 14, paddingBottom: 80 } },
  activeTab === "inventory" && renderInventory(),
  activeTab === "orders"    && renderOrders(),
  activeTab === "dists"     && renderDists(),
  activeTab === "logs"      && renderLogs(),
  activeTab === "admin"     && isAdmin && renderAdmin(),
),

// RETIRE MODAL
retireItem && React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 } },
  React.createElement("div", { style: { background: "#0d1520", border: "1px solid #2a3a4a", borderRadius: 14, padding: 24, width: 300, boxShadow: "0 20px 60px rgba(0,0,0,.8)" } },
    React.createElement("div", { style: { fontSize: 14, color: "#c8964e", marginBottom: 14, fontWeight: 600 } }, `Retirar: ${retireItem.name}`),
    React.createElement("div", { style: { fontSize: 10, color: "#4a6070", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" } }, "Cantidad"),
    React.createElement("input", { type: "number", value: retireQty, onChange: e => setRetireQty(e.target.value), min: 1, max: retireItem.stock, style: { ...S.inputD, width: "100%", boxSizing: "border-box", marginBottom: 12, fontSize: 18, textAlign: "center" } }),
    React.createElement("div", { style: { fontSize: 10, color: "#4a6070", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" } }, "Razón (opcional)"),
    React.createElement("input", { type: "text", value: retireReason, onChange: e => setRetireReason(e.target.value), placeholder: "Roto, vencido, muestra…", style: { ...S.inputD, width: "100%", boxSizing: "border-box", marginBottom: 16 } }),
    React.createElement("div", { style: { display: "flex", gap: 8 } },
      React.createElement("button", { onClick: () => { setRetireItem(null); setRetireQty("1"); setRetireReason(""); }, style: { ...S.btn("#1a2830", "#4a6070"), flex: 1 } }, "Cancelar"),
      React.createElement("button", { onClick: () => markRetired(retireItem.id, parseInt(retireQty) || 1, retireReason), style: { ...S.btn("#c8964e", "#06080a"), flex: 1 } }, "Confirmar"),
    ),
  ),
),

// HISTORY MODAL
histItem && React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 } },
  React.createElement("div", { style: { background: "#0d1520", border: "1px solid #2a3a4a", borderRadius: 14, padding: 20, width: 320, maxHeight: "80vh", overflow: "auto", boxShadow: "0 20px 60px rgba(0,0,0,.8)" } },
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },
      React.createElement("div", { style: { fontSize: 13, color: "#c8964e", fontWeight: 600 } }, histItem.name),
      React.createElement("button", { onClick: () => setHistItem(null), style: { ...S.btn("#1a2830", "#c8964e"), fontSize: 10 } }, "✕"),
    ),
    (() => {
      const cycles = calcCycles(histItem.history);
      return cycles.cycles > 0 && React.createElement("div", { style: { background: "rgba(200,150,78,.1)", border: "1px solid rgba(200,150,78,.2)", borderRadius: 8, padding: "8px 12px", marginBottom: 12, fontSize: 11, color: "#c8964e" } },
        `📊 ${cycles.cycles} ciclo${cycles.cycles !== 1 ? "s" : ""} · Promedio ${cycles.avgDays} días`
      );
    })(),
    (!histItem.history || histItem.history.length === 0)
      ? React.createElement("div", { style: { color: "#3a5060", fontSize: 12, textAlign: "center", padding: 20 } }, "Sin historial aún")
      : [...histItem.history].reverse().map((h, i) => React.createElement("div", { key: i, style: { borderBottom: "1px solid #1a2830", padding: "8px 0", fontSize: 11 } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
            React.createElement("span", { style: { color: h.type === "arrived" ? "#44cc88" : h.type === "finished" ? "#ff6666" : h.type === "retired" ? "#f0932b" : "#c8964e" } },
              h.type === "arrived" ? "📦 Llegada" : h.type === "finished" ? "⚠️ Agotado" : h.type === "retired" ? "🗑️ Retirado" : "📝 Mov."
            ),
            React.createElement("span", { style: { color: "#3a5060" } }, h.date),
          ),
          React.createElement("div", { style: { color: "#4a6070", marginTop: 2 } },
            h.user && `Por: ${h.user}`,
            h.qty && ` · ${h.qty} unidad${h.qty !== 1 ? "es" : ""}`,
            h.reason && ` · ${h.reason}`,
            h.stock !== undefined && ` · Stock: ${h.stock}`,
          ),
        )),
  ),
),
```

);

// ══════════════════════════
// RENDER INVENTORY
// ══════════════════════════
function renderInventory() {
return React.createElement(“div”, null,
// Search & Filter
React.createElement(“div”, { style: { marginBottom: 14 } },
React.createElement(“input”, { value: search, onChange: e => setSearch(e.target.value), placeholder: “🔍 Buscar producto…”, style: { …S.inputD, width: “100%”, boxSizing: “border-box”, marginBottom: 10 } }),
React.createElement(“div”, { style: { display: “flex”, gap: 6, overflowX: “auto”, paddingBottom: 4 } },
cats.map(c => React.createElement(“button”, { key: c, onClick: () => setFilter(c), style: { …S.btn(filter === c ? “#c8964e” : “#1a2830”, filter === c ? “#06080a” : “#4a6070”), whiteSpace: “nowrap”, fontSize: 10, padding: “5px 10px” } }, c)),
),
),

```
  // Add item button (admin only)
  isAdmin && React.createElement("div", { style: { marginBottom: 14 } },
    React.createElement("button", { onClick: () => setShowAdd(!showAdd), style: { ...S.btn("#1a3020", "#44cc88"), width: "100%", fontSize: 11 } }, showAdd ? "✕ Cancelar" : "+ Agregar Producto"),
    showAdd && React.createElement("div", { style: { ...S.card, marginTop: 10 } },
      ["name","category","unit"].map(f => React.createElement("div", { key: f, style: { marginBottom: 10 } },
        React.createElement("div", { style: { fontSize: 9, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, f),
        f === "category"
          ? React.createElement("select", { value: newItem[f], onChange: e => setNewItem({ ...newItem, [f]: e.target.value }), style: { ...S.inputD, width: "100%", boxSizing: "border-box" } },
              ["Whisky","Cognac","Vodka","Gin","Ron","Tequila","Vino","Cerveza","Jugos","Licores","Mixers"].map(o => React.createElement("option", { key: o, value: o }, o))
            )
          : React.createElement("input", { value: newItem[f], onChange: e => setNewItem({ ...newItem, [f]: e.target.value }), style: { ...S.inputD, width: "100%", boxSizing: "border-box" } })
      )),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 } },
        ["stock","backup","par"].map(f => React.createElement("div", { key: f },
          React.createElement("div", { style: { fontSize: 9, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, f),
          React.createElement("input", { type: "number", value: newItem[f], onChange: e => setNewItem({ ...newItem, [f]: parseInt(e.target.value) || 0 }), style: { ...S.inputD, width: "100%", boxSizing: "border-box" } })
        ))
      ),
      React.createElement("button", { onClick: () => {
        if (!newItem.name.trim()) return;
        const id = Math.max(0, ...(inv.map(i => i.id))) + 1;
        const item = { ...newItem, id, velocity: 2.0, trend: "stable", emoji: "📦", history: [] };
        const nx = [...inv, item];
        saveInv(nx);
        appendLog({ user, type: ACT.ADD, item: newItem.name, detail: "Producto agregado" });
        setNewItem({ name: "", category: "Cerveza", unit: "case", stock: 0, backup: 0, par: 2, distId: 1 });
        setShowAdd(false);
        toast(`✅ ${newItem.name} agregado`);
      }, style: { ...S.btn("#c8964e", "#06080a"), width: "100%" } }, "Guardar Producto"),
    ),
  ),

  // Items
  React.createElement("div", null,
    filtered.map(item => {
      const isEdit = editId === item.id;
      const isCrit = item.stock <= item.backup;
      const dist = dists && dists.find(d => d.id === item.distId);
      return React.createElement("div", { key: item.id, style: { ...S.card, borderLeft: isCrit ? "3px solid #ff4444" : "3px solid transparent" } },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 } },
              React.createElement("span", { style: { fontSize: 18 } }, item.emoji || "📦"),
              React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 13, color: "#d0c0a0", fontWeight: 600 } }, item.name),
                React.createElement("div", { style: { fontSize: 10, color: "#3a5060" } }, `${item.category} · ${item.unit}${dist ? " · " + dist.short : ""}`),
              ),
            ),
            React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 } },
              React.createElement("span", { style: S.badge(isCrit ? "#ff4444" : "#44cc88") }, `Stock: ${item.stock}`),
              React.createElement("span", { style: S.badge("#c8964e") }, `Par: ${item.par}`),
              React.createElement("span", { style: S.badge("#4a6070") }, `Backup: ${item.backup}`),
              isCrit && React.createElement("span", { style: S.badge("#ff4444") }, "⚠️ BAJO"),
            ),
          ),
          // Stock controls
          React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 } },
            React.createElement("button", { onClick: () => adjStock(item.id, 1), style: { ...S.btn("#1a3020", "#44cc88"), padding: "6px 12px", fontSize: 16 } }, "+"),
            React.createElement("div", { style: { fontSize: 20, fontWeight: 700, color: isCrit ? "#ff6666" : "#c8964e", minWidth: 32, textAlign: "center" } }, item.stock),
            React.createElement("button", { onClick: () => adjStock(item.id, -1), disabled: item.stock <= 0, style: { ...S.btn(item.stock <= 0 ? "#111" : "#3a1010", item.stock <= 0 ? "#333" : "#ff6666"), padding: "6px 12px", fontSize: 16 } }, "−"),
          ),
        ),

        // Actions row
        React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } },
          React.createElement("button", { onClick: () => { setHistItem(item); }, style: { ...S.btn("#1a2830", "#4a8090"), fontSize: 9, padding: "4px 8px" } }, "📊 Historial"),
          React.createElement("button", { onClick: () => markArrived(item.id), style: { ...S.btn("#1a3020", "#44cc88"), fontSize: 9, padding: "4px 8px" } }, "📦 Llegada"),
          React.createElement("button", { onClick: () => { setRetireItem(item); }, style: { ...S.btn("#2a1810", "#f0932b"), fontSize: 9, padding: "4px 8px" } }, "🗑️ Retirar"),
          isAdmin && React.createElement("button", { onClick: () => { setEditId(isEdit ? null : item.id); setEditVals({ stock: item.stock, backup: item.backup, par: item.par, name: item.name }); }, style: { ...S.btn("#1a1a2a", "#6a7a9a"), fontSize: 9, padding: "4px 8px" } }, isEdit ? "✕" : "✏️ Editar"),
          isAdmin && React.createElement("button", { onClick: () => {
            if (!confirm(`¿Eliminar ${item.name}?`)) return;
            const nx = inv.filter(i => i.id !== item.id);
            saveInv(nx);
            appendLog({ user, type: ACT.DELETE, item: item.name, detail: "Producto eliminado" });
            toast(`🗑️ ${item.name} eliminado`);
          }, style: { ...S.btn("#2a1010", "#ff4444"), fontSize: 9, padding: "4px 8px" } }, "🗑️"),
        ),

        // Edit panel
        isEdit && React.createElement("div", { style: { marginTop: 12, paddingTop: 12, borderTop: "1px solid #1a2830" } },
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 } },
            ["stock","backup","par"].map(f => React.createElement("div", { key: f },
              React.createElement("div", { style: { fontSize: 9, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, f),
              React.createElement("input", { type: "number", value: editVals[f] ?? item[f], onChange: e => setEditVals({ ...editVals, [f]: parseInt(e.target.value) || 0 }), style: { ...S.inputD, width: "100%", boxSizing: "border-box", textAlign: "center" } })
            ))
          ),
          React.createElement("button", { onClick: () => {
            const nx = inv.map(i => i.id === item.id ? { ...i, ...editVals } : i);
            saveInv(nx);
            appendLog({ user, type: ACT.EDIT, item: item.name, detail: `Editado: stock=${editVals.stock}, par=${editVals.par}, backup=${editVals.backup}` });
            setEditId(null);
            toast(`✅ ${item.name} actualizado`);
          }, style: { ...S.btn("#c8964e", "#06080a"), width: "100%" } }, "💾 Guardar"),
        ),
      );
    })
  ),
);
```

}

// ══════════════════════════
// RENDER ORDERS
// ══════════════════════════
function renderOrders() {
const byDist = {};
(inv || []).filter(i => i.stock < i.par).forEach(i => {
if (!byDist[i.distId]) byDist[i.distId] = [];
byDist[i.distId].push(i);
});
const hasOrders = Object.keys(byDist).length > 0;

```
return React.createElement("div", null,
  React.createElement("div", { style: { fontSize: 13, color: "#c8964e", letterSpacing: 2, marginBottom: 16, textTransform: "uppercase" } }, "📋 Pedidos Sugeridos"),
  !hasOrders
    ? React.createElement("div", { style: { ...S.card, textAlign: "center", padding: 30, color: "#3a5060" } }, "✅ Todo el inventario está al nivel de par")
    : Object.entries(byDist).map(([distId, items]) => {
        const dist = dists && dists.find(d => d.id === parseInt(distId));
        return React.createElement("div", { key: distId, style: { ...S.card, borderLeft: `3px solid ${dist ? dist.color : "#c8964e"}` } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } },
            React.createElement("div", null,
              React.createElement("div", { style: { fontSize: 13, color: "#d0c0a0", fontWeight: 600 } }, dist ? dist.name : "Distribuidor " + distId),
              dist && React.createElement("div", { style: { fontSize: 10, color: "#3a5060" } }, `${dist.rep} · ${dist.phone}`),
            ),
            React.createElement("span", { style: S.badge(dist ? dist.color : "#c8964e") }, `${items.length} items`),
          ),
          items.map(i => React.createElement("div", { key: i.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #1a2830" } },
            React.createElement("div", null,
              React.createElement("span", { style: { marginRight: 6 } }, i.emoji || "📦"),
              React.createElement("span", { style: { fontSize: 12, color: "#b0a890" } }, i.name),
            ),
            React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } },
              React.createElement("span", { style: { fontSize: 11, color: "#ff6666" } }, `Stock: ${i.stock}`),
              React.createElement("span", { style: { fontSize: 11, color: "#c8964e" } }, `→ Par: ${i.par}`),
              React.createElement("span", { style: { fontSize: 11, color: "#44cc88", fontWeight: 700 } }, `+${i.par - i.stock}`),
            ),
          )),
          dist && React.createElement("div", { style: { marginTop: 10, fontSize: 10, color: "#4a6070" } }, `📧 ${dist.email}`),
        );
      }),
);
```

}
}
// ══════════════════════════
// RENDER DISTRIBUTORS
// ══════════════════════════
function renderDists() {
return React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 13, color: “#c8964e”, letterSpacing: 2, marginBottom: 16, textTransform: “uppercase” } }, “🚚 Proveedores”),
(dists || []).map(d => React.createElement(“div”, { key: d.id, style: { …S.card, borderLeft: `3px solid ${d.color}` } },
React.createElement(“div”, { style: { display: “flex”, justifyContent: “space-between”, alignItems: “flex-start”, marginBottom: 8 } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 14, color: “#d0c0a0”, fontWeight: 600 } }, d.name),
React.createElement(“div”, { style: { fontSize: 10, color: “#3a5060”, letterSpacing: 1 } }, d.short),
),
React.createElement(“span”, { style: S.badge(d.color) }, d.categories.length + “ cats”),
),
React.createElement(“div”, { style: { display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 8, marginBottom: 8 } },
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, color: “#3a5060”, letterSpacing: 1, marginBottom: 2 } }, “REP”),
React.createElement(“div”, { style: { fontSize: 11, color: “#b0a890” } }, d.rep),
React.createElement(“div”, { style: { fontSize: 10, color: “#4a6070” } }, d.repPhone),
),
React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 9, color: “#3a5060”, letterSpacing: 1, marginBottom: 2 } }, “OFICINA”),
React.createElement(“div”, { style: { fontSize: 11, color: “#b0a890” } }, d.phone),
React.createElement(“div”, { style: { fontSize: 10, color: “#4a6070” } }, d.email),
),
),
d.notes && React.createElement(“div”, { style: { fontSize: 10, color: “#4a7060”, background: “rgba(68,204,136,.06)”, border: “1px solid rgba(68,204,136,.1)”, borderRadius: 6, padding: “4px 8px” } }, “ℹ️ “ + d.notes),
React.createElement(“div”, { style: { marginTop: 8, display: “flex”, gap: 4, flexWrap: “wrap” } },
d.categories.map(c => React.createElement(“span”, { key: c, style: S.badge(d.color) }, c)),
),
)),
);
}

// ══════════════════════════
// RENDER LOGS
// ══════════════════════════
function renderLogs() {
const logs = lsGet(“lp:logs”, []);
return React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 13, color: “#c8964e”, letterSpacing: 2, marginBottom: 16, textTransform: “uppercase” } }, “📝 Registro de Actividad”),
logs.length === 0
? React.createElement(“div”, { style: { …S.card, textAlign: “center”, padding: 30, color: “#3a5060” } }, “Sin registros aún”)
: logs.slice(0, 100).map((log, i) => React.createElement(“div”, { key: i, style: { …S.card, padding: “10px 14px” } },
React.createElement(“div”, { style: { display: “flex”, justifyContent: “space-between”, alignItems: “center”, marginBottom: 4 } },
React.createElement(“span”, { style: { fontSize: 11, color: “#c8964e”, fontWeight: 600 } }, log.item || “–”),
React.createElement(“span”, { style: { fontSize: 9, color: “#3a5060” } }, log.date || “”),
),
React.createElement(“div”, { style: { fontSize: 10, color: “#4a6070” } },
React.createElement(“span”, { style: { color: “#6a8090”, marginRight: 6 } }, log.user || “”),
log.detail || “”,
),
)),
);
}

// ══════════════════════════
// RENDER ADMIN
// ══════════════════════════
function renderAdmin() {
return React.createElement(AdminPanel, { isSuper, currentUser: user, toast, inv, saveInv });
}

// ══════════════════════════════════════════════════════════════════════════════
// ADMIN PANEL COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
function AdminPanel({ isSuper, currentUser, toast, inv, saveInv }) {
const [tab, setTab]         = useState(“users”);
const [staff, setStaff]     = useState(lsGet(“lp:staff”, []));
const [adminUser, setAdminUser] = useState(lsGet(“lp:adminuser”, SUPER_ADMIN));
const [pin, setPin]         = useState(lsGet(“lp:pin”, DEFAULT_PIN));
const [newName, setNewName] = useState(””);
const [pCur, setPCur]       = useState(””);
const [pNew, setPNew]       = useState(””);
const [pConf, setPConf]     = useState(””);
const [pErr, setPErr]       = useState(””);
const [pOk, setPOk]         = useState(false);
const [showPin, setShowPin] = useState(false);
const activeUsers = Object.values(lsGet(“lp:active_users”, {})).filter(u => (tsNow() - u.lastSeen) < 60000);

const saveStaff = (next) => { setStaff(next); lsSet(“lp:staff”, next); };

const addUser = () => {
const n = newName.trim();
if (!n) return;
if (staff.find(s => s.toLowerCase() === n.toLowerCase())) { toast(“Ya existe ese usuario”, “err”); return; }
saveStaff([…staff, n]);
setNewName(””);
toast(`✅ ${n} agregado`);
appendLog({ user: currentUser, type: ACT.ADD, item: n, detail: “Usuario agregado” });
};

const removeUser = (name) => {
saveStaff(staff.filter(s => s !== name));
toast(`🗑️ ${name} eliminado`);
appendLog({ user: currentUser, type: ACT.DELETE, item: name, detail: “Usuario eliminado” });
};

const doChangePin = () => {
setPErr(””);
if (pCur !== pin) { setPErr(“PIN actual incorrecto”); return; }
if (pNew.length < 4) { setPErr(“PIN mínimo 4 caracteres”); return; }
if (pNew !== pConf) { setPErr(“Los PINs no coinciden”); return; }
lsSet(“lp:pin”, pNew);
lsSet(“lp:adminuser”, pUser || adminUser);
setPOk(true);
setPCur(””); setPNew(””); setPConf(””);
setTimeout(() => { setPOk(false); setShowPin(false); }, 2000);
toast(“✅ PIN actualizado”);
appendLog({ user: currentUser, type: ACT.EDIT, item: “PIN”, detail: “PIN de admin actualizado” });
};

const [pUser, setPUser] = useState(adminUser);

return React.createElement(“div”, null,
React.createElement(“div”, { style: { fontSize: 13, color: “#c8964e”, letterSpacing: 2, marginBottom: 16, textTransform: “uppercase” } }, “⚙️ Administración”),

```
// Active users
activeUsers.length > 0 && React.createElement("div", { style: { ...S.card, marginBottom: 14 } },
  React.createElement("div", { style: { fontSize: 10, color: "#4a6070", letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" } }, "🟢 Usuarios Activos"),
  React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } },
    activeUsers.map(u => React.createElement("span", { key: u.name, style: { ...S.badge("#44cc88"), display: "flex", alignItems: "center", gap: 4 } },
      React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#44cc88", display: "inline-block", animation: "pulse 1.5s infinite" } }),
      u.name,
    )),
  ),
),

// Admin tabs
React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 14 } },
  ["users","pin","stats"].map(t => React.createElement("button", { key: t, onClick: () => setTab(t), style: { ...S.btn(tab === t ? "#c8964e" : "#1a2830", tab === t ? "#06080a" : "#4a6070"), fontSize: 10 } },
    t === "users" ? "👥 Usuarios" : t === "pin" ? "🔑 PIN" : "📊 Stats"
  )),
),

// USERS TAB
tab === "users" && React.createElement("div", null,
  React.createElement("div", { style: S.card },
    React.createElement("div", { style: { fontSize: 11, color: "#c8964e", marginBottom: 12, fontWeight: 600 } }, "Empleados con Acceso"),
    staff.length === 0
      ? React.createElement("div", { style: { color: "#3a5060", fontSize: 11, marginBottom: 12 } }, "Sin empleados. Agrega el primero.")
      : staff.map(s => React.createElement("div", { key: s, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #1a2830" } },
          React.createElement("span", { style: { fontSize: 12, color: "#b0a890" } }, s),
          isSuper && React.createElement("button", { onClick: () => removeUser(s), style: { ...S.btn("#2a1010", "#ff4444"), fontSize: 9, padding: "3px 8px" } }, "Eliminar"),
        )),
    isSuper && React.createElement("div", { style: { marginTop: 12, display: "flex", gap: 8 } },
      React.createElement("input", { value: newName, onChange: e => setNewName(e.target.value), onKeyDown: e => e.key === "Enter" && addUser(), placeholder: "Nombre del empleado", style: { ...S.inputD, flex: 1 } }),
      React.createElement("button", { onClick: addUser, style: { ...S.btn("#c8964e", "#06080a") } }, "+ Agregar"),
    ),
    !isSuper && React.createElement("div", { style: { marginTop: 10, fontSize: 10, color: "#3a5060" } }, "Solo Fabinho puede agregar/eliminar empleados."),
  ),
),

// PIN TAB
tab === "pin" && React.createElement("div", null,
  isSuper
    ? React.createElement("div", { style: S.card },
        React.createElement("div", { style: { fontSize: 11, color: "#c8964e", marginBottom: 16, fontWeight: 600 } }, "Cambiar Credenciales de Admin"),
        React.createElement("div", { style: { fontSize: 10, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, "1. Confirma tu PIN actual"),
        React.createElement("input", { type: "password", value: pCur, onChange: e => { setPCur(e.target.value); setPErr(""); }, placeholder: "PIN actual", style: { ...S.inputD, width: "100%", boxSizing: "border-box", marginBottom: 10, letterSpacing: 4 } }),
        React.createElement("div", { style: { fontSize: 10, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, "2. Nuevo nombre de usuario (opcional)"),
        React.createElement("input", { type: "text", value: pUser, onChange: e => setPUser(e.target.value), placeholder: `Actual: ${adminUser}`, style: { ...S.inputD, width: "100%", boxSizing: "border-box", marginBottom: 10 } }),
        React.createElement("div", { style: { fontSize: 10, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, "3. Nuevo PIN"),
        React.createElement("input", { type: "password", value: pNew, onChange: e => { setPNew(e.target.value); setPErr(""); }, placeholder: "Mínimo 4 caracteres", style: { ...S.inputD, width: "100%", boxSizing: "border-box", marginBottom: 10, letterSpacing: 4 } }),
        React.createElement("div", { style: { fontSize: 10, color: "#4a6070", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" } }, "4. Confirmar nuevo PIN"),
        React.createElement("input", { type: "password", value: pConf, onChange: e => { setPConf(e.target.value); setPErr(""); }, onKeyDown: e => e.key === "Enter" && doChangePin(), placeholder: "Repite el nuevo PIN", style: { ...S.inputD, width: "100%", boxSizing: "border-box", marginBottom: 10, letterSpacing: 4 } }),
        pErr && React.createElement("div", { style: { color: "#ff6666", fontSize: 11, marginBottom: 10 } }, pErr),
        pOk && React.createElement("div", { style: { color: "#44cc88", fontSize: 11, marginBottom: 10 } }, "✅ ¡Guardado!"),
        React.createElement("button", { onClick: doChangePin, style: { ...S.btn("#c8964e", "#06080a"), width: "100%" } }, "🔑 Guardar cambios"),
      )
    : React.createElement("div", { style: { ...S.card, textAlign: "center", padding: 30, color: "#3a5060" } }, "Solo Fabinho puede cambiar el PIN."),
),

// STATS TAB
tab === "stats" && React.createElement("div", null,
  React.createElement("div", { style: S.card },
    React.createElement("div", { style: { fontSize: 11, color: "#c8964e", marginBottom: 12, fontWeight: 600 } }, "📊 Estadísticas"),
    [
      ["Total productos", (inv || []).length],
      ["En nivel crítico", (inv || []).filter(i => i.stock <= i.backup).length],
      ["Sin stock", (inv || []).filter(i => i.stock === 0).length],
      ["Por encima del par", (inv || []).filter(i => i.stock >= i.par).length],
      ["Empleados registrados", staff.length],
      ["Registros de actividad", lsGet("lp:logs", []).length],
    ].map(([label, val]) => React.createElement("div", { key: label, style: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a2830" } },
      React.createElement("span", { style: { fontSize: 11, color: "#7a8a9a" } }, label),
      React.createElement("span", { style: { fontSize: 13, color: "#c8964e", fontWeight: 700 } }, val),
    )),
  ),
),
```

);
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT APP COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
function App() {
const [user, setUser]       = useState(lsGet(“lp:session_user”, null));
const [isAdmin, setIsAdmin] = useState(lsGet(“lp:session_admin”, false));
const [isSuper, setIsSuper] = useState(lsGet(“lp:session_super”, false));
const [pin, setPin]         = useState(() => lsGet(“lp:pin”, DEFAULT_PIN));
const [adminUser, setAdminUser] = useState(() => lsGet(“lp:adminuser”, SUPER_ADMIN));
const [staff, setStaff]     = useState(() => lsGet(“lp:staff”, []));

// Sync pin/staff/adminuser periodically
useEffect(() => {
const interval = setInterval(() => {
setPin(lsGet(“lp:pin”, DEFAULT_PIN));
setAdminUser(lsGet(“lp:adminuser”, SUPER_ADMIN));
setStaff(lsGet(“lp:staff”, []));
}, 5000);
return () => clearInterval(interval);
}, []);

const handleLogin = (name, admin, superAdmin) => {
setUser(name);
setIsAdmin(admin);
setIsSuper(superAdmin);
lsSet(“lp:session_user”, name);
lsSet(“lp:session_admin”, admin);
lsSet(“lp:session_super”, superAdmin);
};

const handleLogout = () => {
setUser(null);
setIsAdmin(false);
setIsSuper(false);
lsSet(“lp:session_user”, null);
lsSet(“lp:session_admin”, false);
lsSet(“lp:session_super”, false);
};

if (!user) {
return React.createElement(Login, { pin, adminUser, staff, onLogin: handleLogin });
}

return React.createElement(InvApp, { user, isAdmin, isSuper, onLogout: handleLogout });
}

window.App = App;
