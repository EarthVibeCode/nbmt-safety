// UI translations for "จับ 6 ผู้ร้ายจุดไฟ" — Thai is the source; EN / JP for expat staff.
// Phrases are replaced inside text nodes, longest first. Entries marked X match only a whole text node
// (used for very short words that would break other text). Player names / 5S group names are never touched.
window.I18N = (() => {
  const X = 1;
  // villains: [th, en, jp]
  const VN = [
    ['เจ้าปลั๊กค้าง', 'The Left-On Plug', '差しっぱなしプラグ'],
    ['เจ้าสายไฟแตก', 'The Cracked Cable', 'ひび割れケーブル'],
    ['เจ้ากล่องขวางทาง', 'The Blocking Box', '通せんぼ箱'],
    ['เจ้าเศษผ้าน้ำมัน', 'The Oily Rag', '油まみれウエス'],
    ['เจ้าทินเนอร์เร่ร่อน', 'The Stray Thinner', '放浪シンナー'],
    ['เจ้าประกายไฟไร้คนเฝ้า', 'The Unwatched Spark', '見張りなし火花'],
  ];
  const D = [
    ...VN,
    ...VN.map(v => ['จับ' + v[0] + 'ได้!', 'Caught ' + v[1] + '!', v[2] + 'を逮捕！']),
    // ---- titles / gate / intro ----
    ['จับ 6 ผู้ร้ายจุดไฟ · NBMT Fire Prevention', 'Catch 6 Fire Villains · NBMT Fire Prevention', '火事の犯人6人を逮捕 · NBMT Fire Prevention'],
    ['จับ 6 ผู้ร้ายจุดไฟ!', 'catch 6 fire villains!', '火事の犯人6人を逮捕せよ！'],
    ['จับ 6 ผู้ร้ายจุดไฟ', 'Catch 6 Fire Villains', '火事の犯人6人を逮捕'],
    ['ช่วยนายอำเภอเอิร์ท', 'Help Sheriff Earth', 'アース保安官と'],
    ['▶ แตะเพื่อเริ่ม', '▶ Tap to start', '▶ タップしてスタート'], ['🔊 เปิดเสียงด้วยนะ', '🔊 Turn your sound on', '🔊 サウンドをオンにしてね'],
    ['🔊 แตะเปิดเสียง', '🔊 Tap for sound', '🔊 タップで音声オン'], ['🔇 ปิดเสียง', '🔇 Mute', '🔇 ミュート'],
    ['ข้ามได้ใน', 'Skip in', 'スキップまで'], ['▶ แตะเพื่อเล่น', '▶ Tap to play', '▶ タップして再生'],
    ['3ต 3จ', '3 Checks · 3 Sorts', '3点検・3整理'], ['3ต', '3 Checks', '3点検'], ['3จ', '3 Sorts', '3整理'],
    ['ต1', 'C1', '点1'], ['ต2', 'C2', '点2'], ['ต3', 'C3', '点3'], ['จ1', 'S1', '整1'], ['จ2', 'S2', '整2'], ['จ3', 'S3', '整3'],
    ['ต', 'C', '点', X], ['จ', 'S', '整', X],
    ['ช่วยกันจับ', 'Help catch', 'みんなで逮捕'], ['6 ผู้ร้ายจุดไฟ', '6 Fire Villains', '火事の犯人6人'],
    ['นายอำเภอเอิร์ทจับ', 'Sheriff Earth caught ', 'アース保安官が'],
    ['ได้แล้ว 1 ตัว! เหลืออีก 5 ตัวซ่อนอยู่ในโรงงาน ช่วยกันจับใน', '! 5 more are hiding in the factory — catch them all in', 'を逮捕！残り5体が工場に潜伏中。制限時間'],
    ['30 วินาที', '30 seconds', '30秒'],
    ['แตะ', 'Tap', 'タップ：', X], ['ผู้ร้าย', 'villains', '犯人'], ['(กรอบแดง) = +10 คะแนน', '(red frame) = +10 pts', '（赤枠）= +10点'],
    ['อย่าแตะ', 'Don\'t tap', 'タップ禁止：', X], ['ของดี', 'good items', '安全なもの'], ['(กรอบเขียว) = −5 คะแนน', '(green frame) = −5 pts', '（緑枠）= −5点'],
    ['🎯 จับให้ครบ 6 ชนิด ได้โบนัส +50', '🎯 Catch all 6 types for a +50 bonus', '🎯 6種類すべて逮捕で +50ボーナス'],
    ['▶ เริ่มเกม', '▶ Start', '▶ スタート'], ['🏆 ดูกระดานคะแนน', '🏆 Leaderboard', '🏆 ランキング'], ['🎬 ดูวิดีโอเรื่องราวอีกครั้ง', '🎬 Watch the story again', '🎬 ストーリーをもう一度見る'],
    ['สถิติสูงสุดของคุณ:', 'Your best:', 'あなたのベスト：'],
    // ---- HUD / game ----
    ['เวลา', 'Time', '時間', X], ['คะแนน', 'Score', 'スコア', X], ['จับได้', 'Caught', '逮捕', X],
    ['🎉 ครบ 6 ชนิด! โบนัส +50', '🎉 All 6 types! +50 bonus', '🎉 6種類コンプリート！+50'], ['ปิดคดีทั้งโรงงาน', 'Factory case closed', '工場の事件を解決'],
    ['ครบ 6 ชนิด! +50', 'ALL 6! +50', '6種類！+50'],
    ['อ๊ะ! นั่นของดี', 'Oops! That\'s a good item', 'おっと！それは安全なもの'], ['— ไม่ใช่ผู้ร้ายนะ', '— not a villain!', '— 犯人じゃないよ'],
    ['ปลั๊กที่ถอดแล้ว', 'Unplugged plug', '抜いたプラグ'], ['ถังดับเพลิงพร้อมใช้', 'Ready extinguisher', '使える消火器'], ['ถังโลหะมีฝาปิด', 'Lidded metal bin', 'ふた付き金属缶'],
    ['ตู้สารไวไฟ', 'Flammables cabinet', '可燃物保管庫'], ['ผู้เฝ้าระวังไฟ', 'Fire watch', '火気監視員'], ['ช่างตรวจด้วยกล้องความร้อน', 'Thermal-camera check', 'サーモカメラ点検'],
    ['ห้องเครื่อง', 'Machine room', '機械室'], ['ตู้ไฟ', 'Electrical panel', '配電盤'], ['ทางหนีไฟ', 'Fire exit', '非常口'], ['ไลน์ผลิต', 'Production line', '生産ライン'],
    ['ห้องเก็บสาร', 'Chemical store', '薬品庫'], ['งานเจียร', 'Grinding', '研削作業'], ['สำนักงาน', 'Office', '事務所'], ['โกดัง', 'Warehouse', '倉庫'], ['ลานจอด', 'Parking', '駐車場'],
    // ---- the 6 measures (poster wording) ----
    ['ตรวจสอบการใช้งานและถอดปลั๊กอุปกรณ์ไฟฟ้าหลังใช้งาน', 'Check use and unplug electrical equipment after use', '電気機器は使用後に確認し、プラグを抜く'],
    ['เลิกงาน = ปิดสวิตช์ ถอดปลั๊ก', 'End of shift = switch off, unplug', '終業 = スイッチOFF・プラグを抜く'],
    ['ตรวจสอบ บำรุงรักษาระบบและอุปกรณ์ไฟฟ้าให้พร้อมใช้งานอย่างสม่ำเสมอ', 'Regularly inspect and maintain electrical systems and equipment', '電気設備・機器を定期的に点検・保守する'],
    ['สายไฟ ปลั๊ก ตู้ไฟ ต้องไม่แตก ไม่หลวม', 'Cables, plugs, panels: no cracks, nothing loose', 'ケーブル・プラグ・配電盤に割れやゆるみがないこと'],
    ['ตรวจสอบและดูแลอุปกรณ์ป้องกันและระงับอัคคีภัยให้พร้อมใช้งาน', 'Keep fire protection and fire-fighting equipment ready to use', '防火・消火設備をいつでも使える状態に保つ'],
    ['ห้ามวางของขวางถังดับเพลิง/ทางออก', 'Never block extinguishers or exits', '消火器・非常口の前に物を置かない'],
    ['จัดพื้นที่ทำงานให้สะอาดเพื่อลดเชื้อเพลิงสะสม', 'Keep work areas clean to cut fuel build-up', '作業場を清潔にし、燃えやすい物をためない'],
    ['ผ้าเปื้อนน้ำมัน ทิ้งถังโลหะมีฝาปิด', 'Oily rags go in a lidded metal bin', '油の付いたウエスはふた付き金属缶へ'],
    ['จัดเก็บสารไวไฟให้ถูกที่', 'Store flammables in the right place', '可燃物を正しい場所に保管する'],
    ['ปิดฝา เก็บในตู้สารไวไฟ', 'Close the lid, keep in the flammables cabinet', 'ふたを閉め、可燃物保管庫へ'],
    ['จัดการงานที่ก่อให้เกิดประกายไฟเป็นไปตามมาตรฐาน Hot work', 'Do spark-producing jobs to the Hot Work standard', '火花の出る作業はホットワーク基準どおりに行う'],
    ['ขอ permit · มีผู้เฝ้าระวังไฟ', 'Get a permit · have a fire watch', '許可を取る・火気監視員を置く'],
    // ---- end screen ----
    ['3ต ตรวจให้พร้อมใช้งาน', '3 Checks: keep everything ready', '3点検：いつでも使える状態に'], ['3จ จัดให้ถูกที่ ถูกวิธี', '3 Sorts: right place, right way', '3整理：正しい場所・正しい方法で'],
    ['ตรวจให้พร้อมใช้งาน', 'Check: keep it ready', '点検：いつでも使える状態に'], ['จัดให้ถูกที่ ถูกวิธี', 'Sort: right place, right way', '整理：正しい場所・正しい方法で'],
    ['🏆 นายอำเภอตัวจริง! ไม่พลาดเลย', '🏆 A true sheriff! Not a single miss', '🏆 真の保安官！ミスゼロ'], ['⭐ ปิดคดีครบ 6 ชนิด!', '⭐ All 6 cases closed!', '⭐ 6種類すべて解決！'],
    ['👍 เก่งมาก ใกล้ครบแล้ว', '👍 Great job, almost all!', '👍 すごい、あと少し！'], ['🔥 ผู้ร้ายยังลอยนวล ลองอีกรอบ!', '🔥 Villains still on the loose — try again!', '🔥 犯人はまだ逃走中 — もう一度！'],
    ['จับได้ ', 'Hits ', '逮捕 '], [' ครั้ง · ครบ ', ' · Types ', '回 · 種類 '], ['/6 ชนิด · แตะผิด ', '/6 · Misses ', '/6 · ミス '], [' · สถิติ ', ' · Best ', ' · ベスト '],
    ['ลงชื่อบนกระดานนายอำเภอ', 'Sign the Sheriff Board', '保安官ボードに名前を残す'],
    ['ชื่อเล่น เช่น เอิร์ท', 'Nickname, e.g. Earth', 'ニックネーム 例：Earth'],
    ['🔒 ชื่อนี้สงวนไว้สำหรับนายอำเภอตัวจริง', '🔒 This name is reserved for the real sheriff', '🔒 この名前は本物の保安官専用です'],
    ['ถ้าคุณคือเจ้าของชื่อ ใส่ PIN · ถ้าไม่ใช่ เปลี่ยนชื่อเล่นนะ', 'If it\'s you, enter the PIN · otherwise pick another nickname', 'ご本人ならPINを入力 · 違う場合はニックネームを変えてね'],
    ['PIN 6 หลัก', '6-digit PIN', '6桁のPIN'], ['PIN ไม่ถูกต้อง ลองอีกครั้ง', 'Wrong PIN, try again', 'PINが違います、もう一度'],
    ['รหัสพนักงาน เช่น 6500029', 'Employee ID, e.g. 6500029', '社員番号 例：6500029'],
    ['— Zone 5ส —', '— 5S Zone —', '— 5Sゾーン —'], ['— เลือกกลุ่ม 5ส ในโซน —', '— Pick your 5S group —', '— ゾーン内の5Sグループ —'],
    ['📌 ส่งคะแนน (ลองใหม่)', '📌 Submit (retry)', '📌 送信（再試行）'], ['📌 ส่งคะแนน', '📌 Submit score', '📌 スコア送信'], ['กำลังส่ง...', 'Sending...', '送信中...'],
    ['ชื่อเล่น โซน และกลุ่ม แสดงบนกระดาน · รหัสพนักงานไม่แสดง ใช้ยืนยันตัวตนและนับคะแนนดีที่สุดของแต่ละคน', 'Nickname, zone and group appear on the board · your employee ID is never shown; it only verifies you and keeps your best score', 'ボードにはニックネーム・ゾーン・グループのみ表示 · 社員番号は表示されず、本人確認とベストスコア集計にのみ使用'],
    ['🎖️ ใบรายงานการจับกุม (บันทึก/แชร์)', '🎖️ Arrest report (save/share)', '🎖️ 逮捕レポート（保存/シェア）'], ['🎖️ รับใบรายงานการจับกุม', '🎖️ Get your arrest report', '🎖️ 逮捕レポートを受け取る'],
    ['↻ เล่นอีกครั้ง', '↻ Play again', '↻ もう一度'], ['📤 แชร์ให้เพื่อนมาเล่น', '📤 Invite friends to play', '📤 友だちを誘う'], ['🏆 กระดานคะแนน', '🏆 Leaderboard', '🏆 ランキング'], ['🏠 กลับหน้าแรก', '🏠 Home', '🏠 ホーム'],
    ['พบเห็นผู้ร้ายจริงในโรงงาน:', 'See a real villain in the factory:', '工場で本物の犯人を見つけたら：'],
    ['หยุดใช้ · แจ้งหัวหน้างาน · ให้ผู้รับผิดชอบแก้ไข', 'Stop using it · tell your supervisor · let the owner fix it', '使用中止 · 上司に報告 · 担当者が対処'],
    ['เกิดเพลิงไหม้: กดสัญญาณแจ้งเหตุ · โทร 199 · Safety NBMT 196, 324', 'Fire: press the fire alarm · call 199 · Safety NBMT 196, 324', '火災時：火災報知器を押す · 199に電話 · Safety NBMT 196, 324'],
    ['ดูสรุปผล & ลงชื่อ ›', 'See results & sign ›', '結果を見て名前を残す ›'], ['รายงานการจับกุม · 6 ผู้ร้ายจุดไฟ', 'Arrest report · 6 fire villains', '逮捕レポート · 火事の犯人6人'],
    ['รายงานการจับกุม 6 ผู้ร้ายจุดไฟ', 'Arrest report: 6 fire villains', '逮捕レポート：火事の犯人6人'],
    ['จับแล้ว!', 'CAUGHT!', '逮捕！'], ['หลบหนี', 'ESCAPED', '逃走中'], ['ผู้ช่วยนายอำเภอ', 'Deputy Sheriff', '保安官補佐'], ['นักสืบนิรนาม', 'Anonymous detective', '名無しの探偵'],
    ['คะแนน · จับครบ ', 'pts · Caught ', '点 · 逮捕 '], ['/6 · แตะผิด ', '/6 · Misses ', '/6 · ミス '],
    // ---- rank / medal ----
    ['ส่งคะแนนแล้ว ✓', 'Score submitted ✓', '送信しました ✓'], ['อันดับวันนี้ #', 'Today #', '今日 #'], [' · ตลอดกาล #', ' · All-time #', ' · 歴代 #'], ['จากผู้เล่นทั้งหมด ', 'of ', '全 '], [' คน · ', ' players · ', '人中 · '],
    ['ยินดีด้วย', 'Congrats', 'おめでとう'], ['คุณติด', 'You made ', 'あなたは'], ['อันดับ ', '#', 'ランク #'],
    [' ตลอดกาล บนกระดานนายอำเภอ 🎉', ' all-time on the Sheriff Board 🎉', '（歴代）保安官ボード入り 🎉'], [' ของวันนี้ บนกระดานนายอำเภอ 🎉', ' today on the Sheriff Board 🎉', '（今日）保安官ボード入り 🎉'],
    ['นายอำเภอใหญ่!', 'TOP SHERIFF!', '大保安官！'], ['ยอดเยี่ยม!', 'EXCELLENT!', 'すばらしい！'], ['ปิด', 'Close', '閉じる', X], ['ข้าม', 'Skip', 'スキップ', X],
    // ---- board ----
    ['กำลังโหลด...', 'Loading...', '読み込み中...'], ['วันนี้', 'Today', '今日'], ['ตลอดกาล', 'All-time', '歴代'], ['โซน 5ส', '5S Zones', '5Sゾーン'], ['▶ เล่นเลย', '▶ Play now', '▶ プレイ'],
    ['ผู้เล่น ', '', 'プレイヤー '], ['คน · เล่นไปแล้ว ', 'players · ', '人 · プレイ '], ['ครั้ง', 'plays', '回'], [' คน', ' players', '人'], ['คะแนนรวม', 'total', '合計'],
    ['ยังไม่มีใครลงชื่อ — เป็นคนแรกเลย!', 'No one yet — be the first!', 'まだ誰もいません — 一番乗りしよう！'], ['โหลดกระดานไม่สำเร็จ ลองใหม่อีกครั้ง', 'Couldn\'t load the board, try again', 'ボードを読み込めませんでした、もう一度'],
    ['🥇 นายอำเภอใหญ่ ≥400 ไม่พลาด · 🥈 นายอำเภอ ≥300 · 🥉 ผู้ช่วยนายอำเภอ จับครบ 6 ชนิด', '🥇 Top Sheriff ≥400, no misses · 🥈 Sheriff ≥300 · 🥉 Deputy: all 6 types', '🥇 大保安官 ≥400・ミスなし · 🥈 保安官 ≥300 · 🥉 保安官補佐：6種類すべて'],
    ['คะแนนโซน = รวมคะแนนดีที่สุดของแต่ละคนในโซน · ชวนเพื่อนในโซนมาช่วยกัน!', 'Zone score = sum of each member\'s best · bring your zone mates!', 'ゾーン得点 = メンバー各自のベストの合計 · ゾーンの仲間を誘おう！'],
    // ---- alerts / share ----
    ['รหัสพนักงานไม่ถูกต้อง\nคนไทย: ตัวเลข 7 หลัก เช่น 6500029\nJapanese staff: letters + numbers', 'Invalid employee ID\nThai staff: 7 digits, e.g. 6500029\nJapanese staff: letters + numbers', '社員番号が正しくありません\nタイ人スタッフ：7桁の数字 例 6500029\n日本人スタッフ：英字＋数字'],
    ['ชื่อนี้ใช้ไม่ได้ ลองชื่ออื่นนะ', 'That name isn\'t allowed, try another', 'その名前は使えません、別の名前に'], ['รหัสพนักงานไม่ถูกต้อง', 'Invalid employee ID', '社員番号が正しくありません'], ['ส่งไม่สำเร็จ ลองใหม่อีกครั้ง', 'Couldn\'t submit, try again', '送信できませんでした、もう一度'],
    ['ฉันช่วยนายอำเภอเอิร์ทจับผู้ร้ายจุดไฟได้ ', 'I helped Sheriff Earth catch the fire villains: ', 'アース保安官と火事の犯人を逮捕： '], [' คะแนน (', ' pts (', '点（'], ['/6 ชนิด) มาแข่งกัน!', '/6 types) Can you beat me?', '/6種類）勝負しよう！'],
    ['ปิดคดีจับผู้ร้ายจุดไฟได้ ', 'Fire villain case closed: ', '火事の犯人事件を解決： '], [' คะแนน!', ' pts!', '点！'],
    ['✓ คัดลอกลิงก์แล้ว', '✓ Link copied', '✓ リンクをコピーしました'], ['คัดลอกลิงก์นี้:', 'Copy this link:', 'このリンクをコピー：'],
    ['คะแนน', 'pts', '点'],
  ];
  const EX = new Map(D.filter(r => r[3] === X).map(r => [r[0], r]));
  const SUB = D.filter(r => r[3] !== X).sort((a, b) => b[0].length - a[0].length);
  let lang = 'th'; try { lang = localStorage.getItem('nbmt_lang') || 'th'; } catch (e) {}
  const idx = () => (lang === 'en' ? 1 : lang === 'jp' ? 2 : 0);
  function T(s) {
    if (!s || lang === 'th' || typeof s !== 'string') return s; const k = idx();
    const t = s.trim(); if (EX.has(t)) return s.replace(t, EX.get(t)[k]);
    let o = s; for (const r of SUB) if (o.includes(r[0])) o = o.split(r[0]).join(r[k]); return o;
  }
  // never translate player names, 5S zone/group names or anything marked data-notr
  const skip = (el) => !el || (el.closest && el.closest('[data-notr], .br .nm')) || (el.nodeName === 'OPTION' && el.value !== '');
  const orig = new WeakMap();
  function tr(root) {
    if (!root) return; const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => !n.parentNode || /SCRIPT|STYLE/.test(n.parentNode.nodeName) || skip(n.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const nodes = []; if (root.nodeType === 3) { if (!skip(root.parentNode)) nodes.push(root); } else while (w.nextNode()) nodes.push(w.currentNode);
    for (const n of nodes) { if (!orig.has(n) || (n.nodeValue !== orig.get(n).out)) orig.set(n, { th: n.nodeValue, out: null }); const o = orig.get(n); const v = T(o.th); o.out = v; if (n.nodeValue !== v) n.nodeValue = v; }
    root.querySelectorAll && root.querySelectorAll('[placeholder]').forEach(el => { if (!el.dataset.ph) el.dataset.ph = el.placeholder; el.placeholder = T(el.dataset.ph); });
  }
  const title0 = document.title;
  function set(l) { lang = l; try { localStorage.setItem('nbmt_lang', l); } catch (e) {} document.documentElement.lang = l === 'jp' ? 'ja' : l; document.title = T(title0); tr(document.body); }
  return { T, tr, set, get lang() { return lang; } };
})();
