(()=>{
 'use strict';
 const {questions,categories}=CBTData;
 const {createSession,score,topItems}=CBTScore;
 const app=document.querySelector('#app');
 let session=null;
 const disclaimer='このチェックは、病気や性格を診断するためのものではありません。また、心理検査として標準化された尺度ではありません。恋愛場面で自分にどのような考え方が出やすいかに気づくためのセルフチェックとしてご利用ください。';
 const reality='相手の嘘、約束を繰り返し破ること、侮辱や支配など、現実に起きている問題まで「自分の考えすぎ」にする必要はありません。強い苦痛や安全上の問題は、このチェックだけで解決しようとせず、信頼できる人や専門の相談先に相談してください。';
 function focusHeading(){app.querySelector('[tabindex="-1"]').focus();window.scrollTo(0,0);}
 function intro(focus=false){
  app.innerHTML=`<section class="intro"><p class="eyebrow">32問・約5分</p><h1 tabindex="-1">恋愛思考グセ・<br>ミニチェック</h1><p class="intro-quote">それは「事実」？<br>それとも「私の解釈」？</p><p>最近の彼との関係を思い浮かべながら答えてみてください。自分に出やすい考え方に、少し立ち止まって気づくための時間です。</p><p class="note">${disclaimer}</p><p class="privacy">回答は外部へ送信・保存しません。採点はお使いの端末内で行います。再読み込みやページを閉じると回答は消えます。</p><button class="primary wide" id="start">チェックを始める</button></section>`;
  document.querySelector('#start').onclick=()=>{session=createSession();question();};
  if(focus) focusHeading();
 }
 function question(){
  const q=questions.find(q=>q.id===session.order[session.position]);
  const labels=['ほとんどない','たまにある','ときどきある','よくある','とてもよくある'];
  const answered=Object.keys(session.answers).length;
  app.innerHTML=`<section><div class="progress-info"><span>${session.position+1} / 32</span><span>${answered}問回答済み</span></div><progress max="32" value="${answered}" aria-label="回答済みの設問数">${answered} / 32</progress><h1 class="question-heading" tabindex="-1">質問 ${session.position+1} / 32</h1><fieldset><legend>${q.text}</legend><div class="options">${labels.map((label,i)=>`<label class="option"><input type="radio" name="answer" value="${i}" ${session.answers[q.id]===i?'checked':''}><span>${label}</span></label>`).join('')}</div></fieldset><div class="navigation"><button id="back" ${session.position===0?'disabled':''}>前へ</button><button class="primary" id="next" ${Object.hasOwn(session.answers,q.id)?'':'disabled'}>${session.position===31?'結果を見る':'次へ'}</button></div><p class="note">回答を選んで「次へ」。前の質問に戻って修正できます。</p><button id="clear">回答を消去して最初に戻る</button></section>`;
  app.querySelectorAll('input').forEach(input=>input.onchange=()=>{session.answers[q.id]=Number(input.value);document.querySelector('#next').disabled=false;});
  document.querySelector('#back').onclick=()=>{if(session.position>0){session.position--;question();}};
  document.querySelector('#next').onclick=()=>{if(!Object.hasOwn(session.answers,q.id)) return;if(session.position<31){session.position++;question();}else results();};
  document.querySelector('#clear').onclick=reset;
  focusHeading();
 }
 function row(r){return `<div class="result-row"><div class="result-label"><span>${r.name}</span><strong>${Math.round(r.percentage)}%</strong></div><meter min="0" max="100" value="${r.percentage}" aria-label="${r.name}">${Math.round(r.percentage)}%</meter></div>`;}
 function prompts(c){return `<ul>${c.prompts.map(p=>`<li>${p}</li>`).join('')}</ul>`;}
 function results(){
  let all;
  try{all=score(session.answers);}catch{session.position=session.order.findIndex(id=>!Object.hasOwn(session.answers,id));question();return;}
  const top=topItems(all);
  app.innerHTML=`<section><p class="eyebrow">自分の考え方を、少し離れて眺める</p><h1 tabindex="-1">あなたの恋愛思考グセMAP</h1><p>今回の回答の中で、どの思考パターンが比較的表れやすかったかを見るための結果です。「高い＝悪い」ではありません。</p><div class="card"><h2>今回の回答で比較的表れた思考のクセ</h2>${top.length?top.map(row).join(''):'<p>今回の回答では、すべての項目が0%でした。比較的表れた項目はありません。</p>'}${top.length>3?'<p class="note">3項目目と同点の項目をすべて表示しています。</p>':''}</div><div class="card"><h2>10項目すべての結果</h2><p class="note">各分類の合計点を満点で割り、0〜100に換算しています。％は整数に丸めて表示します。病気の可能性や重症度を表す数値ではありません。</p>${all.map(row).join('')}</div>${top.length?`<div class="card"><h2>次に同じ場面があったら、自分への問い</h2>${top.map(c=>`<h3>${c.name}</h3>${prompts(c)}`).join('')}</div>`:''}<div class="card"><h2>すべての思考のクセのセルフ質問</h2>${categories.map(c=>`<details><summary>${c.name}</summary>${prompts(c)}</details>`).join('')}</div><p>一つの考えに複数の思考のクセが含まれることもあります。自分を一つのタイプに決めつけず、気づくための目安として使ってください。</p><p class="privacy">${reality}</p><p class="note">${disclaimer}</p><div class="actions"><button id="edit">回答を見直す</button><button class="primary" id="restart">もう一度チェックする</button><button id="clear">結果と回答を消去する</button></div></section>`;
  document.querySelector('#edit').onclick=()=>{session.position=0;question();};
  document.querySelector('#restart').onclick=()=>{session=createSession();question();};
  document.querySelector('#clear').onclick=reset;
  focusHeading();
 }
 function reset(){session=null;intro(true);}
 intro();
})();
