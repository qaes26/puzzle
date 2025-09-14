const puzzlesByCategory = {
    "رياضية": [
        { question: "إذا كان لديك 3 تفاحات وأخذت اثنتين، كم تفاحة لديك الآن؟", options: ["1", "2", "3", "0"], answer: "2" },
        { question: "ما هو العدد الذي إذا ضربته في نفسه وأضفت إليه 1 يساوي 26؟", options: ["5", "6", "4", "3"], answer: "5" },
        { question: "إذا كانت ساعة الحائط تشير إلى 9:00، ما الزاوية بين عقرب الساعات وعقرب الدقائق؟", options: ["90 درجة", "180 درجة", "45 درجة", "0 درجة"], answer: "90 درجة" },
        { question: "أنا عدد زوجي مكون من رقمين، مجموع رقمي يساوي 10، ورقمي الأول أكبر من الثاني. ما أنا؟", options: ["64", "46", "82", "73"], answer: "73" },
        { question: "لديك 10 قطع نقدية مرتبة في صف، إذا حركت القطعة الرابعة إلى المركز، كم قطعة تبقى في الصف؟", options: ["10", "9", "5", "4"], answer: "10" },
        { question: "ما هو الشيء الذي إذا قسمته على اثنين، تحصل على صفر؟", options: ["8", "10", "4", "الرقم 8"], answer: "الرقم 8" },
        { question: "إذا كانت أختك تبلغ من العمر 4 سنوات وأخوك أكبر منها بسنة، كم يكون عمر أختك بعد سنتين؟", options: ["5", "6", "4", "7"], answer: "6" },
        { question: "ما هو العدد الذي إذا قلبته يصبح أصغر؟", options: ["88", "69", "71", "96"], answer: "96" },
        { question: "إذا كانت درجة الحرارة -10 وارتفعت 15 درجة، كم تصبح؟", options: ["5", "-5", "25", "-25"], answer: "5" },
        { question: "أنا عدد فردي، إذا أضفت لي عددًا زوجيًا، أصبح عددًا زوجيًا. ما أنا؟", options: ["1", "3", "5", "7"], answer: "1" },
        { question: "إذا كانت لديك 50% من التفاح في سلة، كم تفاحة لديك إذا كانت السلة تحتوي على 100 تفاحة؟", options: ["50", "100", "25", "75"], answer: "50" },
        { question: "ما هو العدد الذي لا يتغير إذا ضربته في نفسه؟", options: ["1", "0", "10", "100"], answer: "1" },
        { question: "إذا كانت لديك 4 قروش وأضفت إليها قرشاً، كم قرشاً لديك؟", options: ["5", "4", "3", "6"], answer: "5" },
        { question: "ما هو الشيء الذي إذا ضربته في نفسه مرتين، تحصل على 27؟", options: ["3", "9", "27", "81"], answer: "3" },
        { question: "إذا كانت لديك 100 جنيه وأعطيت أختك نصفها، كم جنيهًا يبقى لديك؟", options: ["50", "25", "75", "100"], answer: "50" },
        { question: "أنا عدد مكون من ثلاثة أرقام، مجموعها 12، ورقمي الأول هو 3، والثاني هو 4، ما هو رقمي الثالث؟", options: ["5", "6", "3", "4"], answer: "5" },
        { question: "ما هو العدد الذي إذا أضفت له 1، يصبح العدد 100؟", options: ["99", "101", "100", "98"], answer: "99" },
        { question: "إذا كان لديك 50 قلمًا وأعطيت صديقك 10 أقلام، كم قلمًا يبقى لديك؟", options: ["40", "50", "60", "30"], answer: "40" },
        { question: "ما هو العدد الذي إذا قسمته على 4، تحصل على 20؟", options: ["80", "5", "10", "40"], answer: "80" },
        { question: "إذا كانت لديك 10 دراجات هوائية، كم عجلة لديك؟", options: ["20", "10", "30", "40"], answer: "20" },
        { question: "إذا كانت الساعة 2:00، كم ساعة مرت حتى الساعة 6:00؟", options: ["4 ساعات", "2 ساعات", "6 ساعات", "8 ساعات"], answer: "4 ساعات" },
        { question: "ما هو العدد الذي إذا طرحته من 100، يصبح 50؟", options: ["50", "100", "25", "75"], answer: "50" },
        { question: "إذا كان لديك 3 صناديق، وفي كل صندوق صندوقان، وفي كل صندوق صغير 4 صناديق، كم عدد الصناديق الكلي؟", options: ["3", "12", "15", "21"], answer: "15" },
        { question: "ما هو الشيء الذي إذا أخذت نصفه، تحصل على واحد؟", options: ["8", "10", "2", "الرقم 8"], answer: "الرقم 8" },
        { question: "إذا كان لديك 5 قطع حلوى، وأكلت قطعتين، كم قطعة حلوى بقيت لديك؟", options: ["3", "2", "5", "0"], answer: "3" }
    ],
    "دينية": [
        { question: "من هو أول من آمن بالرسول صلى الله عليه وسلم من الرجال؟", options: ["أبو بكر الصديق", "عمر بن الخطاب", "علي بن أبي طالب", "عثمان بن عفان"], answer: "أبو بكر الصديق" },
        { question: "ما هي أول سورة نزلت كاملة في القرآن الكريم؟", options: ["الفاتحة", "المدثر", "العلق", "الناس"], answer: "المدثر" },
        { question: "ما هي الصلاة التي ليس لها أذان ولا إقامة؟", options: ["صلاة الجنازة", "صلاة العيد", "صلاة الفجر", "صلاة الجمعة"], answer: "صلاة الجنازة" },
        { question: "من هو النبي الذي ألقاه قومه في النار؟", options: ["إبراهيم عليه السلام", "يوسف عليه السلام", "موسى عليه السلام", "عيسى عليه السلام"], answer: "إبراهيم عليه السلام" },
        { question: "ما هو الركن الخامس من أركان الإسلام؟", options: ["الحج", "الصوم", "الزكاة", "الصلاة"], answer: "الحج" },
        { question: "ما هو الكتاب السماوي الذي أنزل على النبي موسى عليه السلام؟", options: ["التوراة", "الإنجيل", "الزبور", "القرآن الكريم"], answer: "التوراة" },
        { question: "من هو أول الخلفاء الراشدين؟", options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"], answer: "أبو بكر الصديق" },
        { question: "كم عدد أركان الإيمان؟", options: ["5", "6", "4", "7"], answer: "6" },
        { question: "ما هو أول بيت وضع للناس؟", options: ["الكعبة المشرفة", "المسجد الأقصى", "المسجد النبوي", "مسجد قباء"], answer: "الكعبة المشرفة" },
        { question: "من هو النبي الذي أرسل إلى قوم عاد؟", options: ["هود عليه السلام", "صالح عليه السلام", "إبراهيم عليه السلام", "نوح عليه السلام"], answer: "هود عليه السلام" },
        { question: "في أي شهر هجري يصوم المسلمون؟", options: ["رمضان", "شوال", "شعبان", "محرم"], answer: "رمضان" },
        { question: "ما هي أطول سورة في القرآن الكريم؟", options: ["البقرة", "آل عمران", "النساء", "المائدة"], answer: "البقرة" },
        { question: "ما هو الاسم الآخر لسورة الإسراء؟", options: ["سورة بني إسرائيل", "سورة الإسراء والمعراج", "سورة يونس", "سورة الكهف"], answer: "سورة بني إسرائيل" },
        { question: "من هو خليل الله من الأنبياء؟", options: ["إبراهيم عليه السلام", "محمد صلى الله عليه وسلم", "موسى عليه السلام", "نوح عليه السلام"], answer: "إبراهيم عليه السلام" },
        { question: "ما هو أول مسجد بني في الإسلام؟", options: ["مسجد قباء", "المسجد النبوي", "المسجد الحرام", "المسجد الأقصى"], answer: "مسجد قباء" },
        { question: "ما هي المدينة التي هاجر إليها الرسول صلى الله عليه وسلم؟", options: ["المدينة المنورة", "القدس", "الرياض", "جدة"], answer: "المدينة المنورة" },
        { question: "ما هو الاسم الذي أطلق على معركة بدر الكبرى؟", options: ["يوم الفرقان", "يوم النصر", "يوم الفتح", "يوم الإيمان"], answer: "يوم الفرقان" },
        { question: "ما هو الشيء الذي خلقه الله وعظمه، ولكن لم يخلقه في الجنة؟", options: ["الحمار", "الأسد", "الفيل", "الدب"], answer: "الحمار" },
        { question: "ما هي السورة التي بدأت بالتسبيح وختمت بالتسبيح؟", options: ["الحشر", "الحديد", "القصص", "الجمعة"], answer: "الحشر" },
        { question: "من هي المرأة التي ذكر اسمها صراحةً في القرآن الكريم؟", options: ["مريم بنت عمران", "عائشة", "خديجة", "فاطمة"], answer: "مريم بنت عمران" },
        { question: "ما هو أول ما يحاسب عليه العبد يوم القيامة؟", options: ["الصلاة", "الزكاة", "الصيام", "الشهادة"], answer: "الصلاة" },
        { question: "ما هي السورة التي سميت باسم نبيين؟", options: ["يونس", "هود", "محمد", "يونس وهود"], answer: "يونس وهود" },
        { question: "كم عدد الأنبياء الذين ذكروا في القرآن الكريم؟", options: ["25", "26", "24", "27"], answer: "25" },
        { question: "ما هو الشيء الذي أمر الله به موسى أن يضربه بعصاه فحدث منه العجب؟", options: ["البحر", "الجبل", "النار", "الأرض"], answer: "البحر" },
        { question: "من هو أول من أقام الأذان في الإسلام؟", options: ["بلال بن رباح", "أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان"], answer: "بلال بن رباح" }
    ],
    "علمية": [
        { question: "ما هو أكبر كوكب في المجموعة الشمسية؟", options: ["المشتري", "الأرض", "المريخ", "زحل"], answer: "المشتري" },
        { question: "ما هي المادة التي لا يمكن أن تذوب في الماء؟", options: ["الزيت", "السكر", "الملح", "الرمل"], answer: "الزيت" },
        { question: "ما هو أسرع حيوان على وجه الأرض؟", options: ["الفهد", "الأسد", "النمر", "الحصان"], answer: "الفهد" },
        { question: "ما هو الشيء الذي يوجد في كل مكان، ولكنه لا يرى؟", options: ["الهواء", "الصوت", "الضوء", "الماء"], answer: "الهواء" },
        { question: "ما هي العضلة الأقوى في جسم الإنسان؟", options: ["عضلة الفك", "عضلة القلب", "عضلة الساق", "عضلة اللسان"], answer: "عضلة الفك" },
        { question: "ما هو الشيء الذي يتكون من ذرة واحدة؟", options: ["الهيدروجين", "الأكسجين", "الماء", "الزجاج"], answer: "الهيدروجين" },
        { question: "ما هو العضو الذي يضخ الدم في الجسم؟", options: ["القلب", "الرئة", "الكبد", "الكلى"], answer: "القلب" },
        { question: "ما هو الشيء الذي يمكنك أن تراه في كل مكان، ولكنه لا يرى؟", options: ["الهواء", "الصوت", "الضوء", "الماء"], answer: "الهواء" },
        { question: "ما هو الكوكب الذي يسمى بالكوكب الأحمر؟", options: ["المريخ", "المشتري", "زحل", "الأرض"], answer: "المريخ" },
        { question: "ما هو الحيوان الذي يستطيع أن ينام وعيناه مفتوحتان؟", options: ["الأسد", "التمساح", "الفيل", "الدب"], answer: "التمساح" },
        { question: "ما هو أسرع كائن حي على وجه الأرض؟", options: ["الفهد", "الأسد", "الصقر", "النسر"], answer: "الصقر" },
        { question: "ما هو الشيء الذي لا يمكن أن يبلل بالماء؟", options: ["الظل", "الضوء", "النار", "التراب"], answer: "الظل" },
        { question: "ما هي أطول عظمة في جسم الإنسان؟", options: ["عظمة الفخذ", "عظمة اليد", "عظمة الساق", "عظمة الجمجمة"], answer: "عظمة الفخذ" },
        { question: "ما هو الشيء الذي إذا غليته، يصبح أبيض؟", options: ["البيض", "الماء", "الخبز", "القمح"], answer: "البيض" },
        { question: "ما هي المادة التي تسمى الذهب السائل؟", options: ["الزيت", "النفط", "العسل", "الزئبق"], answer: "النفط" },
        { question: "ما هو العضو الذي يقوم بتصفية الدم في الجسم؟", options: ["الكلى", "القلب", "الرئة", "الكبد"], answer: "الكلى" },
        { question: "ما هو الغاز الذي تطلقه النباتات في عملية البناء الضوئي؟", options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"], answer: "الأكسجين" },
        { question: "ما هو أثقل عنصر في الجدول الدوري؟", options: ["الأوزميوم", "الذهب", "البلاتين", "الحديد"], answer: "الأوزميوم" },
        { question: "ما هو الشيء الذي يأخذ منك 200 عام لكي يتعفن؟", options: ["الورقة", "الورق المقوى", "البلاستيك", "الزجاج"], answer: "البلاستيك" },
        { question: "ما هو اسم العضو الذي يخزن المعلومات في جسم الإنسان؟", options: ["الدماغ", "القلب", "الكبد", "الكلى"], answer: "الدماغ" },
        { question: "ما هو أطول نهر في العالم؟", options: ["النيل", "الأمازون", "الفرات", "السين"], answer: "النيل" },
        { question: "ما هو أكبر محيط على وجه الأرض؟", options: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"], answer: "المحيط الهادئ" },
        { question: "ما هو الشيء الذي يمكن أن يطفو على الماء؟", options: ["الخشب", "الحديد", "الحجر", "الرصاص"], answer: "الخشب" },
        { question: "ما هو الشيء الذي يغلي عند 100 درجة مئوية؟", options: ["الماء", "الزيت", "العسل", "الخل"], answer: "الماء" },
        { question: "ما هو الشيء الذي يتكون من خلايا حية؟", options: ["النبات", "التراب", "الحجر", "الزجاج"], answer: "النبات" }
    ],
    "أدبية": [
        { question: "من هو مؤلف رواية 'الزيني بركات'؟", options: ["جمال الغيطاني", "نجيب محفوظ", "طه حسين", "يوسف السباعي"], answer: "جمال الغيطاني" },
        { question: "من هو الشاعر الذي لقب بالفرزدق؟", options: ["همام بن غالب", "أحمد شوقي", "المتنبي", "أبو نواس"], answer: "همام بن غالب" },
        { question: "ما هو اللقب الذي يطلق على الشاعر أبو القاسم الشابي؟", options: ["شاعر الخضراء", "أمير الشعراء", "شاعر النيل", "شاعر العرب الأكبر"], answer: "شاعر الخضراء" },
        { question: "من هي مؤلفة رواية 'هاري بوتر'؟", options: ["ج. ك. رولينغ", "أجاثا كريستي", "جين أوستن", "ماري شيلي"], answer: "ج. ك. رولينغ" },
        { question: "ما هو الشيء الذي له أسنان ولا يأكل؟", options: ["المشط", "المنشار", "الفرشاة", "الساعة"], answer: "المشط" },
        { question: "من هو الشاعر الذي قتلته ابنته؟", options: ["طرفة بن العبد", "المتنبي", "الفرزدق", "الشنفري"], answer: "الشنفري" },
        { question: "ما هو اسم الشخصية الرئيسية في رواية 'أولاد حارتنا'؟", options: ["جبلاوي", "الزيني", "حسين", "عرفة"], answer: "جبلاوي" },
        { question: "من هو مؤلف رواية 'الخبز الحافي'؟", options: ["محمد شكري", "نجيب محفوظ", "طه حسين", "غسان كنفاني"], answer: "محمد شكري" },
        { question: "من هو الكاتب الذي ألف رواية 'الخيميائي'؟", options: ["باولو كويلو", "دان براون", "غابرييل غارسيا ماركيز", "خورخي لويس بورخيس"], answer: "باولو كويلو" },
        { question: "ما هو اللقب الذي يطلق على الشاعر أحمد شوقي؟", options: ["أمير الشعراء", "شاعر النيل", "شاعر العرب الأكبر", "شاعر الخضراء"], answer: "أمير الشعراء" },
        { question: "من هو مؤلف مسرحية 'الملك لير'؟", options: ["ويليام شكسبير", "جورج برنارد شو", "أوسكار وايلد", "صمويل بيكيت"], answer: "ويليام شكسبير" },
        { question: "ما هو اللقب الذي أطلق على الأديب عباس محمود العقاد؟", options: ["العملاق", "الشاعر", "المتنبي", "الفيلسوف"], answer: "العملاق" },
        { question: "من هو الشاعر الذي اشتهر بقصيدة 'لست أدري'؟", options: ["إيليا أبو ماضي", "جبران خليل جبران", "ميخائيل نعيمة", "أبو القاسم الشابي"], answer: "إيليا أبو ماضي" },
        { question: "ما هي الرواية التي كتبها نجيب محفوظ وفاز عنها بجائزة نوبل؟", options: ["ثلاثية القاهرة", "أولاد حارتنا", "زقاق المدق", "بداية ونهاية"], answer: "ثلاثية القاهرة" },
        { question: "من هو مؤلف رواية 'مئة عام من العزلة'؟", options: ["غابرييل غارسيا ماركيز", "باولو كويلو", "خورخي لويس بورخيس", "خوان رولفو"], answer: "غابرييل غارسيا ماركيز" },
        { question: "من هو الشاعر الجاهلي الذي لقب بالملك الضليل؟", options: ["امرؤ القيس", "عنترة بن شداد", "زهير بن أبي سلمى", "عمرو بن كلثوم"], answer: "امرؤ القيس" },
        { question: "ما هي المدينة التي ولد فيها الكاتب طه حسين؟", options: ["المنيا", "القاهرة", "الإسكندرية", "أسوان"], answer: "المنيا" },
        { question: "من هو كاتب قصة 'الفتى النبيل'؟", options: ["دوستويفسكي", "تولستوي", "تشيخوف", "هيغو"], answer: "هيغو" },
        { question: "من هو الشاعر الذي لقب بـ 'شاعر النيل'؟", options: ["حافظ إبراهيم", "أحمد شوقي", "إيليا أبو ماضي", "جبران خليل جبران"], answer: "حافظ إبراهيم" },
        { question: "ما هو الشيء الذي يمكنك كسره بمجرد نطق اسمه؟", options: ["الصمت", "الوعاء", "الزجاج", "الخشب"], answer: "الصمت" },
        { question: "من هو مؤلف رواية 'الأمير الصغير'؟", options: ["أنطوان دو سانت إكزوبيري", "تولستوي", "دوستويفسكي", "هيغو"], answer: "أنطوان دو سانت إكزوبيري" },
        { question: "من هو مؤلف رواية 'ليلى والمجنون'؟", options: ["قيس بن الملوح", "جميل بن معمر", "عنترة بن شداد", "المتنبي"], answer: "قيس بن الملوح" },
        { question: "ما هو اللقب الذي يطلق على الشاعر أبو الطيب المتنبي؟", options: ["شاعر العرب الأكبر", "أمير الشعراء", "شاعر النيل", "شاعر الخضراء"], answer: "شاعر العرب الأكبر" },
        { question: "من هو مؤلف رواية 'زوربا اليوناني'؟", options: ["نيكوس كازانتزاكيس", "باولو كويلو", "غابرييل غارسيا ماركيز", "أغاثا كريستي"], answer: "نيكوس كازانتزاكيس" },
        { question: "ما هو اسم الفارس الجاهلي الذي عُرف بقوته وشعره؟", options: ["عنترة بن شداد", "امرؤ القيس", "زهير بن أبي سلمى", "قيس بن الملوح"], answer: "عنترة بن شداد" }
    ]
};

const allPuzzles = [
    ...puzzlesByCategory["رياضية"],
    ...puzzlesByCategory["دينية"],
    ...puzzlesByCategory["علمية"],
    ...puzzlesByCategory["أدبية"]
];

// التأكد من أن جميع العناصر موجودة قبل استخدامها
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const playerNameInput = document.getElementById('player-name-input');
const playerNameDisplay = document.getElementById('player-name-display');
const questionNumberEl = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackText = document.getElementById('feedback-text');
const scoreDisplay = document.getElementById('score-display');
const finalScoreEl = document.getElementById('final-score');
const finalMessageEl = document.getElementById('final-message');
const endPlayerNameEl = document.getElementById('end-player-name');

let currentPuzzleIndex;
let score;
let shuffledPuzzles;
let playerName;

// التأكد من أن الأزرار موجودة قبل إضافة الـ Event Listeners
if (startBtn) startBtn.addEventListener('click', startGame);
if (restartBtn) restartBtn.addEventListener('click', startGame);

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    screen.classList.add('active-screen');
}

function startGame() {
    playerName = playerNameInput.value.trim();
    if (playerName === '') {
        alert('الرجاء إدخال اسمك أولاً!');
        return;
    }

    if (gameScreen) showScreen(gameScreen);
    if (playerNameDisplay) playerNameDisplay.textContent = `مرحباً، ${playerName}!`;
    
    shuffledPuzzles = allPuzzles.sort(() => Math.random() - 0.5);
    currentPuzzleIndex = 0;
    score = 0;
    if (scoreDisplay) scoreDisplay.textContent = score;
    loadPuzzle();
}

function loadPuzzle() {
    if (optionsContainer) optionsContainer.innerHTML = '';
    if (feedbackText) feedbackText.textContent = '';
    
    if (currentPuzzleIndex < shuffledPuzzles.length) {
        const currentPuzzle = shuffledPuzzles[currentPuzzleIndex];
        
        if (questionNumberEl) questionNumberEl.textContent = `لغز ${currentPuzzleIndex + 1} من ${shuffledPuzzles.length}`;
        if (questionText) questionText.textContent = currentPuzzle.question;
        
        const shuffledOptions = currentPuzzle.options.sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', selectAnswer);
            if (optionsContainer) optionsContainer.appendChild(button);
        });
    } else {
        showEndScreen();
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = selectedButton.textContent;
    const correctAnswer = shuffledPuzzles[currentPuzzleIndex].answer;
    
    if (optionsContainer) {
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
        });
    }

    if (selectedAnswer === correctAnswer) {
        score++;
        if (scoreDisplay) scoreDisplay.textContent = score;
        if (feedbackText) {
            feedbackText.textContent = 'إجابة صحيحة! 🎉';
            feedbackText.style.color = 'var(--correct-color)';
        }
    } else {
        if (selectedButton) selectedButton.classList.add('incorrect');
        if (feedbackText) {
            feedbackText.textContent = `إجابة خاطئة. الصحيح هو: ${correctAnswer}`;
            feedbackText.style.color = 'var(--incorrect-color)';
        }
    }
    
    currentPuzzleIndex++;
    
    setTimeout(() => {
        if (currentPuzzleIndex < shuffledPuzzles.length) {
            loadPuzzle();
        } else {
            showEndScreen();
        }
    }, 2000);
}

function showEndScreen() {
    if (endScreen) showScreen(endScreen);
    if (finalScoreEl) finalScoreEl.textContent = score;
    if (endPlayerNameEl) endPlayerNameEl.textContent = playerName;

    let message;
    if (score === shuffledPuzzles.length) {
        message = 'رائع! لقد حللت جميع الألغاز. أنت عبقري حقيقي!';
    } else if (score >= shuffledPuzzles.length * 0.7) {
        message = 'أداء ممتاز! كدت أن تحل كل شيء.';
    } else {
        message = 'أداء جيد. حاول مرة أخرى لتحسين نتيجتك!';
    }
    if (finalMessageEl) finalMessageEl.textContent = message;
}

// تشغيل شاشة البداية عند تحميل الصفحة
if (startScreen) showScreen(startScreen);