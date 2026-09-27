// 確定仕様書から抽出。設問の文言・分類を変更しないこと。
(function(root){
const data = {
  "questions": [
    {
      "id": "q1",
      "category": "all_or_nothing",
      "text": "彼とのデートが少しうまくいかなかっただけで、「今日のデートは失敗だった」と感じることがある。"
    },
    {
      "id": "q2",
      "category": "all_or_nothing",
      "text": "彼から期待していたような愛情表現がないと、「私は愛されていない」と考えることがある。"
    },
    {
      "id": "q3",
      "category": "all_or_nothing",
      "text": "喧嘩をすると、それまでうまくいっていたことも忘れて、「私たちの関係はうまくいっていない」と考えることがある。"
    },
    {
      "id": "q4",
      "category": "overgeneralization",
      "text": "一度返信を後回しにされると、「私はいつも後回しにされる」と考えることがある。"
    },
    {
      "id": "q5",
      "category": "overgeneralization",
      "text": "一度デートを断られると、「これからも会いたいと思ってもらえない」と考えることがある。"
    },
    {
      "id": "q6",
      "category": "overgeneralization",
      "text": "彼との間で嫌なことが起きると、「私の恋愛はいつもこうなる」と考えることがある。"
    },
    {
      "id": "q7",
      "category": "mental_filter",
      "text": "デート全体は楽しかったのに、彼のちょっとした冷たい言葉だけがいつまでも頭に残ることがある。"
    },
    {
      "id": "q8",
      "category": "mental_filter",
      "text": "彼が普段してくれていることより、その日に「してくれなかったこと」ばかり気になることがある。"
    },
    {
      "id": "q9",
      "category": "mental_filter",
      "text": "彼との関係に良いところがいくつもあっても、一つ気になることがあると、そればかり考えてしまうことがある。"
    },
    {
      "id": "q10",
      "category": "discounting_positive",
      "text": "彼から「好き」と言われても、「恋人なんだから、それくらい言うのは普通」と考えてしまうことがある。"
    },
    {
      "id": "q11",
      "category": "discounting_positive",
      "text": "彼が自分のために何かしてくれても、「たまたま」「大したことではない」と考えてしまうことがある。"
    },
    {
      "id": "q12",
      "category": "discounting_positive",
      "text": "彼から褒められても、「本当にそう思っているわけじゃない」と、その言葉を素直に受け取れないことがある。"
    },
    {
      "id": "q13",
      "category": "jumping_to_conclusions",
      "text": "彼の返信が短いと、理由を確かめる前に「私と話したくないんだ」と考えることがある。",
      "subtype": "mind_reading"
    },
    {
      "id": "q14",
      "category": "jumping_to_conclusions",
      "text": "彼がデート中あまり話さないと、「私といても楽しくないんだ」と相手の気持ちを決めつけることがある。",
      "subtype": "mind_reading"
    },
    {
      "id": "q15",
      "category": "jumping_to_conclusions",
      "text": "最近LINEが減ったと感じると、「このまま彼の気持ちは冷めていく」と先のことまで悪く考えることがある。",
      "subtype": "fortune_telling"
    },
    {
      "id": "q16",
      "category": "jumping_to_conclusions",
      "text": "喧嘩をすると、「これがきっかけで関係が悪くなって、いずれ別れるかもしれない」と未来を悪い方向へ予測することがある。",
      "subtype": "fortune_telling"
    },
    {
      "id": "q17",
      "category": "magnification_minimization",
      "text": "自分が彼にしてしまった小さな失敗を、実際以上に大きな問題のように感じることがある。"
    },
    {
      "id": "q18",
      "category": "magnification_minimization",
      "text": "自分が彼のためにできていることを、「こんなの大したことではない」と小さく評価することがある。"
    },
    {
      "id": "q19",
      "category": "magnification_minimization",
      "text": "自分の短所はとても大きく見えるのに、恋人としての自分の長所は小さく感じることがある。"
    },
    {
      "id": "q20",
      "category": "emotional_reasoning",
      "text": "「嫌われた気がする」と感じると、実際に彼の気持ちが冷めているように思えてくることがある。"
    },
    {
      "id": "q21",
      "category": "emotional_reasoning",
      "text": "強い不安を感じると、「こんなに不安なのだから、何か悪いことが起きているに違いない」と考えることがある。"
    },
    {
      "id": "q22",
      "category": "emotional_reasoning",
      "text": "彼とほかの女性のことで嫉妬すると、「こんなに嫉妬するということは、やっぱり何かあるのかもしれない」と考えることがある。"
    },
    {
      "id": "q23",
      "category": "should_statements",
      "text": "「彼氏なら、忙しくても毎日連絡するべきだ」と思うことがある。"
    },
    {
      "id": "q24",
      "category": "should_statements",
      "text": "「恋人なら、言わなくても私の気持ちを分かってくれるべきだ」と思うことがある。"
    },
    {
      "id": "q25",
      "category": "should_statements",
      "text": "「本当に私を好きなら、もっと○○してくれるはず」と、自分の中の恋人像を彼に当てはめることがある。"
    },
    {
      "id": "q26",
      "category": "labeling",
      "text": "恋愛で失敗すると、「私は恋愛下手だ」「私は重い女だ」など、一つの言葉で自分自身を決めつけることがある。"
    },
    {
      "id": "q27",
      "category": "labeling",
      "text": "彼が一度自分勝手な行動をすると、「この人は自己中心的な人だ」など、その行動ではなく彼自身にレッテルを貼ることがある。"
    },
    {
      "id": "q28",
      "category": "labeling",
      "text": "嫉妬したり不安になったりする自分を、「面倒な女」「ダメな彼女」などと決めつけることがある。"
    },
    {
      "id": "q29",
      "category": "personalization_blame",
      "text": "彼の機嫌が悪いと、特に根拠がなくても「私が何かしたのかな」と自分に原因を探すことがある。",
      "subtype": "self_blame"
    },
    {
      "id": "q30",
      "category": "personalization_blame",
      "text": "彼が落ち込んでいたり楽しそうでなかったりすると、自分とは関係のない可能性を考える前に、「私にも原因があるのかも」と考えることがある。",
      "subtype": "self_blame"
    },
    {
      "id": "q31",
      "category": "personalization_blame",
      "text": "二人の間で問題が起きると、自分にも改善できることがないか考える前に、「彼が悪い」と考えることがある。",
      "subtype": "other_blame"
    },
    {
      "id": "q32",
      "category": "personalization_blame",
      "text": "自分が怒ったり不安になったりしたとき、「彼が○○したから私はこうなった」と、自分の反応まで彼だけの責任だと考えることがある。",
      "subtype": "other_blame"
    }
  ],
  "categories": [
    {
      "id": "all_or_nothing",
      "name": "全か無か思考",
      "prompts": [
        "本当に0か100しかない？",
        "30点、50点、70点という見方をするとどうなる？",
        "「うまくいかなかった部分」と「うまくいった部分」を分けると？"
      ]
    },
    {
      "id": "overgeneralization",
      "name": "一般化のしすぎ",
      "prompts": [
        "今回の一度の出来事を「いつも」に広げていない？",
        "「今回」と「これまで」を分けるとどうなる？",
        "反対の例は一つもなかった？"
      ]
    },
    {
      "id": "mental_filter",
      "name": "心のフィルター",
      "prompts": [
        "今、悪かった部分だけを見ていない？",
        "今日起きたことを良いことも含めて全部並べると？",
        "気になっている一つ以外には何があった？"
      ]
    },
    {
      "id": "discounting_positive",
      "name": "マイナス化思考（肯定的側面の否定）",
      "prompts": [
        "良かったことを「大したことない」と打ち消していない？",
        "親友が同じことをしても「大したことない」と言う？",
        "その好意をそのまま受け取るとしたら、どう見える？"
      ]
    },
    {
      "id": "jumping_to_conclusions",
      "name": "結論の飛躍",
      "prompts": [
        "これは確認できた事実？ それとも私の推測？",
        "彼本人に確認したこと？ それとも心を読んでいる？",
        "未来がそうなると決まっている？ 他の可能性は？"
      ]
    },
    {
      "id": "magnification_minimization",
      "name": "拡大解釈と過小評価",
      "prompts": [
        "悪いことだけ大きく、良いことだけ小さく見ていない？",
        "同じ出来事を第三者が見たら、どのくらいの大きさに感じる？",
        "自分の長所やできていることを同じ基準で評価している？"
      ]
    },
    {
      "id": "emotional_reasoning",
      "name": "感情的決めつけ",
      "prompts": [
        "「そう感じている」ことと「そうだと確認できている」ことは同じ？",
        "不安の強さを、事実の確かさだと思っていない？",
        "感情をいったん横に置いたら、確認できる事実は何？"
      ]
    },
    {
      "id": "should_statements",
      "name": "すべき思考",
      "prompts": [
        "これは絶対的なルール？ それとも私の希望？",
        "「〜すべき」を「〜してくれたら嬉しい」に変えると？",
        "相手と共有・合意したルールなのか、自分の中だけのルールなのか？"
      ]
    },
    {
      "id": "labeling",
      "name": "レッテル貼り",
      "prompts": [
        "一つの行動から、その人全体を決めつけていない？",
        "「○○な人」ではなく、「○○という行動をした」と言い換えると？",
        "自分自身にも同じようなレッテルを貼っていない？"
      ]
    },
    {
      "id": "personalization_blame",
      "name": "個人化（責任転嫁）",
      "prompts": [
        "「全部私のせい」「全部彼のせい」になっていない？",
        "この出来事に関係している要因を「自分・相手・状況」に分けると？",
        "「誰が悪い？」ではなく「何が、どのくらい関係している？」と考えると？"
      ]
    }
  ]
};
if(typeof module !== 'undefined') module.exports=data; else root.CBTData=data;
})(globalThis);
