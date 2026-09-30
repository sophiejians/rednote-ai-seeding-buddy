export type Conditions = { skin: string; season: string; scene: string; sensitive: string; concerns: string[] };
export const allConditions: Conditions = { skin: '不限', season: '不限', scene: '不限', sensitive: '不限', concerns: [] };
export const suggested: Conditions = { skin: '油皮', season: '夏季', scene: '日常通勤', sensitive: '不限', concerns: ['妆效持久'] };
export type Note = { hasProduct: boolean; id: string; author: string; title: string; skin: string; season: string; scene: string; sensitive: boolean; photo: string; avatar: string; images: string[]; likes: number; date: string; body: string[]; facts: string[]; quote: string; spec: string };
export const notes: Note[] = [
 {hasProduct:true,id:'n1', author:'颜叨叨', title:'人生建议：DW粉底液先买小样试试！',skin:'油皮',season:'夏季',scene:'日常通勤',sensitive:false,photo:'n1',avatar:'portrait',images:['n1','n9'],likes:116,date:'2026-08-20',spec:'小样 · 1W1',facts:['lasting','oil','natural'],quote:'第8小时T区有光泽，脸颊的妆面还完整。',body:['最近通勤包里一直放着这瓶小样。比起直接买正装，我更想先试清楚色号和一天后的妆面。','我的情况：油皮，夏季，主要在空调房通勤。薄薄上一层是比较自然的雾面，前4小时妆面完整，没有明显脱妆。','第8小时T区有光泽，脸颊的妆面还完整。鼻翼我用纸巾按了一下，没有继续叠粉。','这是我这几天的使用感受，妆前和环境都会有影响。小样试色也要看自然光，别只看刚上脸的颜色。']},
 {hasProduct:true,id:'n2',author:'林早',title:'通勤8小时，记录一下补妆前后',skin:'油皮',season:'夏季',scene:'日常通勤',sensitive:false,photo:'n2',avatar:'portrait',images:['n2'],likes:86,date:'2026-08-18',spec:'小样 · 1W1',facts:['lasting','oil','natural'],quote:'午后补了一次散粉，脸颊妆面还完整。',body:['油皮的夏季通勤日记。早上九点上妆，地铁二十分钟，其他时间基本在室内。','前4小时底妆比较完整，薄涂不厚重。午后鼻子有些油光。','午后补了一次散粉，脸颊妆面还完整。晚上回家鼻翼有一点积粉，不能说一整天完全不需要补妆。','我更在意通勤时妆面是否自然。如果你追求完全哑光，也要把补妆这一步考虑进去。']},
 {hasProduct:true,id:'n3',author:'小鹿酱',title:'混油皮的夏天，6小时之后是什么样',skin:'混油',season:'夏季',scene:'日常通勤',sensitive:false,photo:'n3',avatar:'cheek',images:['n3'],likes:248,date:'2026-08-22',spec:'正装 · 1W1',facts:['oil','natural'],quote:'6小时后鼻翼有油光，整体没有大块斑驳。',body:['混油皮，夏天上班。脸颊偏正常，T区会出油。这里用的是正装1W1。','薄涂的妆感比较轻，近看还是有自己的皮肤纹理。','6小时后鼻翼有油光，整体没有大块斑驳。吸油纸按压之后还可以，不过下午摸起来没有早上那么干爽。','不同规格和妆前步骤可能影响体验，这条只是我的一次记录。']},
 {hasProduct:true,id:'n4',author:'芝士小葵',title:'干皮秋天用DW，妆前这一步不能省',skin:'干皮',season:'秋季',scene:'日常通勤',sensitive:false,photo:'n4',avatar:'bottleFace',images:['n4'],likes:172,date:'2026-09-12',spec:'小样 · 1W1',facts:['dry','cover'],quote:'两颊没有保湿到位的地方，下午出现了干纹。',body:['干皮，秋天，日常通勤。今天只用了平时一半的妆前保湿，想记录一下真实状态。','红色痘印薄涂后还能看到，需要局部遮瑕。','两颊没有保湿到位的地方，下午出现了干纹。对我来说，不能只看刚上妆时的效果。','下次会维持同样用量、补足保湿再比较，目前不急着入正装。']},
 {hasProduct:true,id:'n5',author:'喵喵不熬夜',title:'秋日底妆记录｜保湿之后再薄涂',skin:'干皮',season:'秋季',scene:'日常通勤',sensitive:false,photo:'n5',avatar:'eye',images:['n5'],likes:94,date:'2026-09-16',spec:'小样 · 1W1',facts:['natural','dry'],quote:'薄涂后妆面自然，但到了傍晚嘴角还是有点干。',body:['干皮秋季通勤，我今天把保湿做好，等护肤吸收后再上底妆。','薄涂后妆面自然，但到了傍晚嘴角还是有点干。','早上看起来服帖不代表一整天都一样。我会先把这瓶小样用完，观察不同妆前步骤下的差别。']},
 {hasProduct:true,id:'n6',author:'阿橙',title:'有痘印的混干皮，不开滤镜看遮瑕',skin:'混干',season:'冬季',scene:'重要场合',sensitive:false,photo:'n6',avatar:'cheek',images:['n6'],likes:63,date:'2026-09-19',spec:'小样 · 2W0',facts:['cover','dry'],quote:'薄涂能匀肤色，深色痘印还是需要单独遮瑕。',body:['混干皮，冬季参加朋友聚会，用的是2W0小样。','薄涂能匀肤色，深色痘印还是需要单独遮瑕。','鼻翼有一点起皮，我没有继续叠加。不同色号不能直接按别人上脸效果选，还是要自己试色。']},
 {hasProduct:true,id:'n7',author:'慢慢来呀',title:'换季试小样，只记录这一次的感受',skin:'中性',season:'春季',scene:'日常通勤',sensitive:true,photo:'n7',avatar:'portrait',images:['n7'],likes:58,date:'2026-09-20',spec:'小样 · 1W1',facts:['natural'],quote:'这次薄涂比较自然，只能说明我当天的体验。',body:['中性肤质，自述换季容易敏感。春季在室内短时间使用。','这次薄涂比较自然，只能说明我当天的体验。','我不会因为一次记录就判断它适合所有敏感状态，其他人的使用感受也不能代替自己的实际情况。']},
 {hasProduct:true,id:'n8',author:'周末去散步',title:'户外待了一下午，底妆没有想象中省心',skin:'油皮',season:'夏季',scene:'户外',sensitive:false,photo:'n8',avatar:'eye',images:['n8'],likes:131,date:'2026-08-25',spec:'正装 · 1W1',facts:['oil','cover'],quote:'出汗后鼻翼掉了一些底妆，遮瑕也变弱了。',body:['油皮，夏天户外步行，用正装1W1。今天的环境比空调房热得多。','出汗后鼻翼掉了一些底妆，遮瑕也变弱了。','中途按压过汗水，所以这个结果不能直接拿来和室内通勤比较。我会更关注环境和补妆条件。']}
];
export const factDefinitions = [
 {id:'natural',title:'薄涂妆感自然',description:'提到轻薄、自然，保留皮肤纹理。',type:'positive',concern:'轻薄自然'},
 {id:'lasting',title:'前4小时妆面较完整',description:'记录的是室内通勤体验，仍有补妆差异。',type:'positive',concern:'妆效持久'},
 {id:'oil',title:'长时间后留意T区油光',description:'使用环境和补妆方式，值得一起看。',type:'attention',concern:'控油'},
 {id:'dry',title:'局部干燥需要留意',description:'嘴角、两颊与妆前保湿的记录值得核对。',type:'attention',concern:'妆效持久'},
 {id:'cover',title:'薄涂的遮瑕有局限',description:'部分记录提到痘印或出汗后的遮盖不足。',type:'attention',concern:'遮瑕'}
];
export function filterNotes(c:Conditions){ return notes.filter(n => (c.skin==='不限'||n.skin===c.skin)&&(c.season==='不限'||n.season===c.season)&&(c.scene==='不限'||n.scene===c.scene)&&(c.sensitive==='不限'||n.sensitive)); }
export function conditionLabel(c:Conditions){ return [c.skin,c.season,c.scene,c.sensitive].filter(x=>x!=='不限').join(' · ') || '全部体验'; }
export function citationFor(note:Note,fact?:string){
 if(!fact||fact==='quote')return note.quote;
 const patterns:Record<string,RegExp>={natural:/自然|不厚重|比较轻/,lasting:/前4小时/,oil:/油光|有光泽|出汗后/,dry:/干纹|嘴角|起皮/,cover:/痘印|遮瑕/};
 return note.body.find(p=>patterns[fact]?.test(p))||note.quote;
}
export function getFacts(list:Note[],c:Conditions){return factDefinitions.map(f=>({...f,notes:list.filter(n=>n.facts.includes(f.id))})).filter(f=>f.notes.length).sort((a,b)=>Number(c.concerns.includes(b.concern))-Number(c.concerns.includes(a.concern)));}
export function getSummary(list:Note[],c:Conditions){
 if(list.length<2)return '符合条件的记录还不够，先看看现有笔记，或放宽参考条件。';
 if(c.skin==='油皮'&&c.season==='夏季'&&c.scene==='日常通勤') return '这两篇通勤记录都提到前4小时妆面较完整；长时间后T区出现油光，其中一位午后补过散粉。建议把持妆表现和补妆步骤一起看。';
 if(c.skin==='干皮'&&c.season==='秋季'&&c.scene==='日常通勤')return '这两篇干皮通勤记录都提到局部干燥，妆前保湿步骤不同。刚上妆的服帖感之外，也值得留意下午和傍晚的状态。';
 if(c.skin==='不限'&&c.season==='不限'&&c.scene==='不限'&&c.sensitive==='不限')return '不同肤质和使用环境下的记录有差异：有人提到薄涂自然，也有人留意到油光、干燥或遮瑕不足。可以先选择参考条件，再回看具体记录。';
 return null;
}
