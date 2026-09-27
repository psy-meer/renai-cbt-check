(function(root){
 'use strict';
 const data = typeof module !== 'undefined' ? require('./questions.js') : root.CBTData;
 function shuffle(items, random = Math.random){
  const copy=[...items];
  for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}
  return copy;
 }
 function score(answers){
  if(!answers || data.questions.some(q=>!Object.hasOwn(answers,q.id)||!Number.isInteger(answers[q.id])||answers[q.id]<0||answers[q.id]>4)) throw Error('32問すべてに回答してください。');
  return data.categories.map(c=>{
   const qs=data.questions.filter(q=>q.category===c.id);
   const raw=qs.reduce((sum,q)=>sum+answers[q.id],0);
   return {...c,raw,max:qs.length*4,percentage:raw/(qs.length*4)*100};
  });
 }
 function topItems(results){
  const sorted=results.filter(r=>r.percentage>0).sort((a,b)=>b.percentage-a.percentage);
  if(sorted.length<=3) return sorted;
  return sorted.filter(r=>r.percentage>=sorted[2].percentage);
 }
 function createSession(){return {order:shuffle(data.questions.map(q=>q.id)),answers:{},position:0};}
 const api={shuffle,score,topItems,createSession};
 if(typeof module!=='undefined') module.exports=api; else root.CBTScore=api;
})(globalThis);
