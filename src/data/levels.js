// src/data/levels.js
// 25 Unique Levels for English Flame categorized into 5 Stages

export const stages = [
  {
    id: 1,
    name: "Beginner",
    range: "Levels 1–5",
    levelIds: [1, 2, 3, 4, 5],
    description: "Ingliz tili asoslari, salomlashish, shaxs olmoshlari va oddiy so'zlar",
    badge: "🌱 Yangi boshlovchi"
  },
  {
    id: 2,
    name: "Elementary",
    range: "Levels 6–10",
    levelIds: [6, 7, 8, 9, 10],
    description: "Present Simple, o'rin-payt predloglari, savol va inkor gaplar",
    badge: "🌿 Boshlang'ich"
  },
  {
    id: 3,
    name: "Pre-Intermediate",
    range: "Levels 11–15",
    levelIds: [11, 12, 13, 14, 15],
    description: "Past Simple, Past Continuous, Future niyatlar va sifat darajalari",
    badge: "🌲 O'rtadan oldingi"
  },
  {
    id: 4,
    name: "Intermediate",
    range: "Levels 16–20",
    levelIds: [16, 17, 18, 19, 20],
    description: "Present Perfect, Passive Voice, Conditionals va Gerund/Infinitive",
    badge: "⭐ O'rta daraja"
  },
  {
    id: 5,
    name: "Advanced",
    range: "Levels 21–25",
    levelIds: [21, 22, 23, 24, 25],
    description: "Aralash shart gaplar, inversiya, frazeologik fe'llar va akademik lug'at",
    badge: "👑 Yuqori daraja"
  }
];

export const levels = [
  // ==========================================
  // STAGE 1: BEGINNER (Levels 1–5)
  // ==========================================
  {
    id: 1,
    stage: "Beginner",
    stageId: 1,
    title: "Greetings & Introductions",
    topic: "Salomlashish va tanishuv",
    xpReward: 20,
    questions: [
      {
        id: "q1_1",
        type: "multiple_choice",
        instruction: "To'g'ri salomlashish iborasini tanlang:",
        question: "What is the most polite greeting used in the morning?",
        options: ["Good morning", "Good night", "Good evening"],
        answer: "Good morning",
        explanation: "Ertalab salomlashish uchun 'Good morning' (Xayrli tong) ishlatiladi."
      },
      {
        id: "q1_2",
        type: "translation",
        instruction: "Iboraning o'zbekcha to'g'ri tarjimasini toping:",
        question: '"Nice to meet you" iborasining ma\'nosi nima?',
        options: ["Tanishganimdan xursandman", "Xayr, ko'rishguncha", "Kechirasiz"],
        answer: "Tanishganimdan xursandman",
        explanation: "'Nice to meet you' yangi tanishganda 'Tanishganimdan xursandman' degan ma'noda aytiladi."
      },
      {
        id: "q1_3",
        type: "fill_blank",
        instruction: "Bo'sh joyni to'ldiring:",
        question: "Hello, my name ___ Alex.",
        options: ["is", "am", "are"],
        answer: "is",
        explanation: "'My name' (Mening ismim) 3-shaxs birlik bo'lgani uchun 'is' to'g'ri keladi."
      },
      {
        id: "q1_4",
        type: "sentence_building",
        instruction: "So'zlarni bosib, to'g'ri so'roq gap tuzing:",
        question: "Holatni so'rash jumlasi:",
        options: ["How", "are", "you", "today?"],
        answer: "How are you today?",
        explanation: "Holatni so'rashda to'g'ri tartib: How + are + you + today?"
      },
      {
        id: "q1_5",
        type: "grammar",
        instruction: "Savolga eng mos grammatik javobni tanlang:",
        question: "Choose the best response to: 'How are you?'",
        options: ["I am fine, thank you.", "I am a student.", "Yes, I am."],
        answer: "I am fine, thank you.",
        explanation: "'Ahvolingiz qanday?' savoliga 'I am fine, thank you' (Yaxshiman, rahmat) deb javob beriladi."
      }
    ]
  },
  {
    id: 2,
    stage: "Beginner",
    stageId: 1,
    title: "To Be & Personal Pronouns",
    topic: "'To be' fe'li va shaxs olmoshlari",
    xpReward: 20,
    questions: [
      {
        id: "q2_1",
        type: "grammar",
        instruction: "To'g'ri yordamchi fe'lni tanlang:",
        question: "I ___ a student at the local college.",
        options: ["am", "is", "are"],
        answer: "am",
        explanation: "'I' (men) shaxs olmoshi bilan hozirgi zamonda 'am' fe'li ishlatiladi."
      },
      {
        id: "q2_2",
        type: "multiple_choice",
        instruction: "Otlar o'rniga mos olmoshni toping:",
        question: "Which pronoun can replace 'Tom and John'?",
        options: ["They", "We", "He"],
        answer: "They",
        explanation: "Tom va John (ular) ko'plikda bo'lgani sababli 'They' olmoshi bilan almashtiriladi."
      },
      {
        id: "q2_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Biz baxtlimiz" jumlasining inglizcha tarjimasi qaysi?',
        options: ["We are happy", "They are happy", "I am happy"],
        answer: "We are happy",
        explanation: "'Biz' - We, 'baxtlimiz' - are happy."
      },
      {
        id: "q2_4",
        type: "fill_blank",
        instruction: "Bo'sh joyga mos so'zni qo'ying:",
        question: "She ___ very smart and kind.",
        options: ["is", "am", "are"],
        answer: "is",
        explanation: "'She' (u) olmoshidan keyin 'is' fe'li ishlatiladi."
      },
      {
        id: "q2_5",
        type: "sentence_building",
        instruction: "So'zlarni to'g'ri tartibda birlashtiring:",
        question: "Gap tuzing:",
        options: ["They", "are", "my", "best", "friends."],
        answer: "They are my best friends.",
        explanation: "Gap strukturasi: Ega (They) + kesim (are) + egalik (my) + sifat (best) + ot (friends)."
      }
    ]
  },
  {
    id: 3,
    stage: "Beginner",
    stageId: 1,
    title: "Everyday Objects & Articles",
    topic: "Kundalik buyumlar va artikllar (a / an)",
    xpReward: 20,
    questions: [
      {
        id: "q3_1",
        type: "grammar",
        instruction: "To'g'ri artiklni tanlang:",
        question: "There is ___ apple on the kitchen table.",
        options: ["an", "a", "the"],
        answer: "an",
        explanation: "'Apple' unli tovush [æ] bilan boshlangani sababli 'an' noaniq artikli qo'yiladi."
      },
      {
        id: "q3_2",
        type: "multiple_choice",
        instruction: "Qaysi so'z 'a' noaniq artikli bilan to'g'ri keladi?",
        question: "Which phrase is correct?",
        options: ["a book", "a orange", "an book"],
        answer: "a book",
        explanation: "'Book' undosh [b] tovushi bilan boshlanadi, shuning uchun 'a book' to'g'ri."
      },
      {
        id: "q3_3",
        type: "translation",
        instruction: "Savolning o'zbekcha ma'nosini toping:",
        question: '"Where is my notebook?" jumlasining tarjimasi?',
        options: ["Mening daftarim qayerda?", "Mening qalamim bormi?", "Bu mening kitobim"],
        answer: "Mening daftarim qayerda?",
        explanation: "'Where' - qayerda, 'notebook' - daftar."
      },
      {
        id: "q3_4",
        type: "fill_blank",
        instruction: "Mos artiklni tanlang:",
        question: "He holds ___ umbrella in his hand.",
        options: ["an", "a", "one"],
        answer: "an",
        explanation: "'Umbrella' unli [ʌ] tovushi bilan boshlanadi, shuning uchun 'an' ishlatiladi."
      },
      {
        id: "q3_5",
        type: "sentence_building",
        instruction: "Jumlani to'g'ri tuzing:",
        question: "Stolda qalam bor:",
        options: ["There", "is", "a", "pen", "on", "the", "desk."],
        answer: "There is a pen on the desk.",
        explanation: "'There is' biror narsa mavjudligini bildiradi: There is a pen on the desk."
      }
    ]
  },
  {
    id: 4,
    stage: "Beginner",
    stageId: 1,
    title: "Numbers, Plurals & Colors",
    topic: "Raqamlar, otlarning ko'plik shakli va ranglar",
    xpReward: 20,
    questions: [
      {
        id: "q4_1",
        type: "grammar",
        instruction: "Ko'plik shaklini to'g'ri tanlang:",
        question: "One child, but three ___ in the room.",
        options: ["children", "childs", "childrens"],
        answer: "children",
        explanation: "'Child' noto'g'ri o'zgaruvchi ot bo'lib, ko'pligi 'children' bo'ladi."
      },
      {
        id: "q4_2",
        type: "multiple_choice",
        instruction: "To'g'ri rangni tanlang:",
        question: "What color do you get when you mix blue and yellow?",
        options: ["Green", "Purple", "Orange"],
        answer: "Green",
        explanation: "Moviy va sariq rang aralashmasidan yashil ('Green') rang hosil bo'ladi."
      },
      {
        id: "q4_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Men yigirma yoshdaman" ingliz tilida qanday ifodalanadi?',
        options: ["I am twenty years old", "I have twenty years", "I twenty years"],
        answer: "I am twenty years old",
        explanation: "Ingliz tilida yosh 'to be' fe'li orqali aytiladi: 'I am twenty years old'."
      },
      {
        id: "q4_4",
        type: "fill_blank",
        instruction: "Ko'plik shaklini to'ldiring:",
        question: "The delivery worker brought two heavy ___.",
        options: ["boxes", "boxs", "box"],
        answer: "boxes",
        explanation: "-x harfi bilan tugaydigan otlarga ko'plikda '-es' qo'shiladi: boxes."
      },
      {
        id: "q4_5",
        type: "sentence_building",
        instruction: "So'zlarni tartiblab gap tuzing:",
        question: "Uning uchta qora mushugi bor:",
        options: ["She", "has", "three", "black", "cats."],
        answer: "She has three black cats.",
        explanation: "To'g'ri tartib: Ega (She) + fe'l (has) + son (three) + rang (black) + ot (cats)."
      }
    ]
  },
  {
    id: 5,
    stage: "Beginner",
    stageId: 1,
    title: "Family & Basic Relationships",
    topic: "Oila a'zolari va qarindoshlik",
    xpReward: 20,
    questions: [
      {
        id: "q5_1",
        type: "multiple_choice",
        instruction: "Qarindoshlik nomini aniqlang:",
        question: "Who is your mother's sister?",
        options: ["Aunt", "Uncle", "Niece"],
        answer: "Aunt",
        explanation: "Onaning opasi yoki singlisi 'aunt' (xola) bo'ladi."
      },
      {
        id: "q5_2",
        type: "translation",
        instruction: "Gapning to'g'ri tarjimasini toping:",
        question: '"My brother is a doctor" gapi qanday tarjima qilinadi?',
        options: ["Mening akam shifokor", "Mening otam o'qituvchi", "Mening do'stim talaba"],
        answer: "Mening akam shifokor",
        explanation: "'Brother' - aka yoki uka, 'doctor' - shifokor."
      },
      {
        id: "q5_3",
        type: "fill_blank",
        instruction: "Bo'sh joyni mos so'z bilan to'ldiring:",
        question: "My father's brother is my ___.",
        options: ["uncle", "cousin", "nephew"],
        answer: "uncle",
        explanation: "Otaning akasi yoki ukasi 'uncle' (amaki) bo'ladi."
      },
      {
        id: "q5_4",
        type: "grammar",
        instruction: "So'roq gapga mos so'zni tanlang:",
        question: "Do you have ___ brothers or sisters?",
        options: ["any", "some", "much"],
        answer: "any",
        explanation: "So'roq gaplarda 'hech qanday / biron-bir' ma'nosida 'any' ishlatiladi."
      },
      {
        id: "q5_5",
        type: "sentence_building",
        instruction: "Jumlani to'g'ri shakllantiring:",
        question: "Bu mening oilam fotosurati:",
        options: ["This", "is", "a", "photo", "of", "my", "family."],
        answer: "This is a photo of my family.",
        explanation: "Struktura: This is a photo of my family."
      }
    ]
  },

  // ==========================================
  // STAGE 2: ELEMENTARY (Levels 6–10)
  // ==========================================
  {
    id: 6,
    stage: "Elementary",
    stageId: 2,
    title: "Present Simple & Daily Routines",
    topic: "Hozirgi oddiy zamon va kun tartibi",
    xpReward: 20,
    questions: [
      {
        id: "q6_1",
        type: "grammar",
        instruction: "Fe'l shaklini to'g'ri tanlang:",
        question: "He ___ English lessons every Tuesday.",
        options: ["takes", "take", "taking"],
        answer: "takes",
        explanation: "Present Simple da 3-shaxs birlik (He) bilan fe'lga '-s' qo'shimchasi qo'shiladi."
      },
      {
        id: "q6_2",
        type: "multiple_choice",
        instruction: "Grammatik jihatdan to'g'ri gapni tanlang:",
        question: "Which sentence is grammatically correct?",
        options: ["She wakes up early.", "She wake up early.", "She waking up early."],
        answer: "She wakes up early.",
        explanation: "'She' olmoshidan keyin fe'l 'wakes up' shaklida bo'ladi."
      },
      {
        id: "q6_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"U har kuni ertalab yuguradi" jumlasining to\'g\'ri tarjimasi:',
        options: ["He runs every morning", "He running every morning", "He run every morning"],
        answer: "He runs every morning",
        explanation: "Muntazam odat 'runs every morning' shaklida Present Simple da beriladi."
      },
      {
        id: "q6_4",
        type: "fill_blank",
        instruction: "Inkor yordamchi fe'lini tanlang:",
        question: "They ___ not work on Sundays.",
        options: ["do", "does", "are"],
        answer: "do",
        explanation: "'They' ko'plik olmoshi bilan inkor shaklida 'do not' ishlatiladi."
      },
      {
        id: "q6_5",
        type: "sentence_building",
        instruction: "So'zlarni tartiblab to'g'ri gap hosil qiling:",
        question: "U odatda soat o'nda uxlaydi:",
        options: ["He", "usually", "goes", "to", "bed", "at", "ten."],
        answer: "He usually goes to bed at ten.",
        explanation: "Odat ravishi (usually) ega va asosiy fe'l o'rtasida turadi."
      }
    ]
  },
  {
    id: 7,
    stage: "Elementary",
    stageId: 2,
    title: "Possessive Adjectives & Pronouns",
    topic: "Egalik sifatlari va olmoshlari",
    xpReward: 20,
    questions: [
      {
        id: "q7_1",
        type: "grammar",
        instruction: "Mustaqil egalik olmoshini tanlang:",
        question: "This is not your pen, it is ___.",
        options: ["mine", "my", "me"],
        answer: "mine",
        explanation: "Otdan keyin yolg'iz qo'llanuvchi mustaqil shakl 'mine' (meniki) bo'ladi."
      },
      {
        id: "q7_2",
        type: "multiple_choice",
        instruction: "To'g'ri shaklni tanlang:",
        question: "The dog wagged ___ tail happily.",
        options: ["its", "it's", "their"],
        answer: "its",
        explanation: "'Its' egalik shakli, 'it's' esa 'it is' qisqartmasidir."
      },
      {
        id: "q7_3",
        type: "translation",
        instruction: "Inglizcha tarjimani toping:",
        question: '"Bu bizning yangi uyimiz" jumlasining tarjimasi:',
        options: ["This is our new house", "This is ours new house", "This is us new house"],
        answer: "This is our new house",
        explanation: "Otdan oldin egalik sifati 'our' (bizning) ishlatiladi."
      },
      {
        id: "q7_4",
        type: "fill_blank",
        instruction: "Bo'sh joyni to'ldiring:",
        question: "Sarah left ___ keys on the counter.",
        options: ["her", "hers", "she"],
        answer: "her",
        explanation: "Ayol kishi va ot oldida 'her' egalik sifati qo'yiladi."
      },
      {
        id: "q7_5",
        type: "sentence_building",
        instruction: "So'roq gap tuzing:",
        question: "U issiq palto senikimi?",
        options: ["Is", "that", "warm", "coat", "yours?"],
        answer: "Is that warm coat yours?",
        explanation: "Mustaqil egalik olmoshi bilan: Is that warm coat yours?"
      }
    ]
  },
  {
    id: 8,
    stage: "Elementary",
    stageId: 2,
    title: "Prepositions of Time & Place",
    topic: "Vaqt va o'rin predloglari (in, on, at)",
    xpReward: 20,
    questions: [
      {
        id: "q8_1",
        type: "grammar",
        instruction: "Aniq vaqt oldidan predlogni tanlang:",
        question: "The train leaves ___ 6:30 PM sharp.",
        options: ["at", "in", "on"],
        answer: "at",
        explanation: "Aniq soat va daqiqalar oldidan har doim 'at' predlogi qo'yiladi."
      },
      {
        id: "q8_2",
        type: "multiple_choice",
        instruction: "Oy nomi oldidan to'g'ri predlog:",
        question: "We celebrate New Year's Eve ___ December.",
        options: ["in", "at", "on"],
        answer: "in",
        explanation: "Oylar va yillar oldidan 'in' predlogi ishlatiladi (in December)."
      },
      {
        id: "q8_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Ular yakshanba kuni uchrashadilar"',
        options: ["They meet on Sunday", "They meet at Sunday", "They meet in Sunday"],
        answer: "They meet on Sunday",
        explanation: "Hafta kunlari oldidan 'on' predlogi ishlatiladi (on Sunday)."
      },
      {
        id: "q8_4",
        type: "fill_blank",
        instruction: "O'rin-joy predlogini qo'ying:",
        question: "The sleeping cat is ___ the wooden chair.",
        options: ["under", "between", "during"],
        answer: "under",
        explanation: "Stul ostida ma'nosida 'under' mos keladi."
      },
      {
        id: "q8_5",
        type: "sentence_building",
        instruction: "Gapni to'g'ri tuzing:",
        question: "Kalitlar peshtaxta ustida:",
        options: ["The", "keys", "are", "on", "the", "counter."],
        answer: "The keys are on the counter.",
        explanation: "Ega (The keys) + are + o'rin (on the counter)."
      }
    ]
  },
  {
    id: 9,
    stage: "Elementary",
    stageId: 2,
    title: "Questions & Negations",
    topic: "So'roq va inkor tuzilmalari",
    xpReward: 20,
    questions: [
      {
        id: "q9_1",
        type: "grammar",
        instruction: "To'g'ri so'roq yordamchi fe'lini tanlang:",
        question: "___ she know how to drive a car?",
        options: ["Does", "Do", "Is"],
        answer: "Does",
        explanation: "3-shaxs birlik (she) uchun Present Simple da 'Does' bilan so'roq yasaladi."
      },
      {
        id: "q9_2",
        type: "multiple_choice",
        instruction: "To'g'ri inkor gapni tanlang:",
        question: "Select the correct negative sentence:",
        options: ["He doesn't like spicy food.", "He don't likes spicy food.", "He not like spicy food."],
        answer: "He doesn't like spicy food.",
        explanation: "'He' uchun 'doesn't' ishlatiladi va undan keyin fe'l boshlang'ich shaklida keladi."
      },
      {
        id: "q9_3",
        type: "translation",
        instruction: "Inglizcha tarjimasini toping:",
        question: '"Siz ingliz tilida gapirasizmi?"',
        options: ["Do you speak English?", "Are you speak English?", "You speak English?"],
        answer: "Do you speak English?",
        explanation: "Umumiy so'roq yordamchi fe'l 'Do' bilan boshlanadi: Do you speak English?"
      },
      {
        id: "q9_4",
        type: "fill_blank",
        instruction: "To'g'ri fe'l shaklini tanlang:",
        question: "Why ___ they so late for class today?",
        options: ["are", "do", "does"],
        answer: "are",
        explanation: "'Late' sifati bilan 'to be' fe'li ishlatiladi, 'they' uchun 'are' kerak."
      },
      {
        id: "q9_5",
        type: "sentence_building",
        instruction: "Maxsus so'roq gap tuzing:",
        question: "Siz hozir qayerda yashaysiz?",
        options: ["Where", "do", "you", "live", "now?"],
        answer: "Where do you live now?",
        explanation: "So'roq so'zi (Where) + do + you + live + now?"
      }
    ]
  },
  {
    id: 10,
    stage: "Elementary",
    stageId: 2,
    title: "Adverbs of Frequency & Food",
    topic: "Chastota ravishlari va taomlar",
    xpReward: 20,
    questions: [
      {
        id: "q10_1",
        type: "grammar",
        instruction: "Mos chastota ravishini tanlang:",
        question: "She ___ eats fast food because she prefers healthy meals.",
        options: ["rarely", "always", "daily"],
        answer: "rarely",
        explanation: "Sog'lom ovqatni ma'qul ko'rgani uchun 'fast food'ni juda kam ('rarely') yeydi."
      },
      {
        id: "q10_2",
        type: "multiple_choice",
        instruction: "Ravish o'rni to'g'ri bo'lgan gapni tanlang:",
        question: "Where should 'always' be placed?",
        options: ["He always arrives on time.", "Always he arrives on time.", "He arrives always on time."],
        answer: "He always arrives on time.",
        explanation: "Chastota ravishlari ega va asosiy fe'l o'rtasida joylashadi."
      },
      {
        id: "q10_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Biz har doim ertalab choy ichamiz"',
        options: ["We always drink tea in the morning", "We drink always tea in the morning", "We tea always drink in the morning"],
        answer: "We always drink tea in the morning",
        explanation: "'Always' asosiy fe'l 'drink' oldida turadi: We always drink tea in the morning."
      },
      {
        id: "q10_4",
        type: "fill_blank",
        instruction: "Bo'sh joyga mos so'zni tanlang:",
        question: "Would you like ___ fresh apple juice?",
        options: ["some", "a", "many"],
        answer: "some",
        explanation: "Taklif ma'nosidagi gaplarda sanalmaydigan otlar bilan 'some' ishlatiladi."
      },
      {
        id: "q10_5",
        type: "sentence_building",
        instruction: "Gap tuzing:",
        question: "Men ba'zan uyda kechki ovqat pishiraman:",
        options: ["I", "sometimes", "cook", "dinner", "at", "home."],
        answer: "I sometimes cook dinner at home.",
        explanation: "Tartib: Ega (I) + ravish (sometimes) + fe'l (cook) + to'ldiruvchi (dinner) + o'rin (at home)."
      }
    ]
  },

  // ==========================================
  // STAGE 3: PRE-INTERMEDIATE (Levels 11–15)
  // ==========================================
  {
    id: 11,
    stage: "Pre-Intermediate",
    stageId: 3,
    title: "Past Simple Tense",
    topic: "O'tgan oddiy zamon (Past Simple)",
    xpReward: 20,
    questions: [
      {
        id: "q11_1",
        type: "grammar",
        instruction: "Fe'lning o'tgan zamon shaklini tanlang:",
        question: "Last weekend, we ___ to the mountains.",
        options: ["went", "go", "gone"],
        answer: "went",
        explanation: "'Go' fe'lining Past Simple shakli 'went' bo'ladi."
      },
      {
        id: "q11_2",
        type: "multiple_choice",
        instruction: "O'tgan zamonda to'g'ri tuzilgan inkor gapni toping:",
        question: "Which negative sentence in Past Simple is correct?",
        options: ["She didn't call me.", "She didn't called me.", "She not called me."],
        answer: "She didn't call me.",
        explanation: "'Didn't' dan keyin fe'l boshlang'ich shaklida keladi: didn't call."
      },
      {
        id: "q11_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"U kecha yangi mashina sotib oldi"',
        options: ["He bought a new car yesterday", "He buyed a new car yesterday", "He was bought a new car yesterday"],
        answer: "He bought a new car yesterday",
        explanation: "'Buy' noto'g'ri fe'l bo'lib, o'tgan zamoni 'bought' shaklida bo'ladi."
      },
      {
        id: "q11_4",
        type: "fill_blank",
        instruction: "So'roq yordamchi fe'lini tanlang:",
        question: "Where ___ you spend your summer vacation?",
        options: ["did", "do", "were"],
        answer: "did",
        explanation: "Past Simple dagi so'roq gaplarda 'did' yordamchi fe'li ishlatiladi."
      },
      {
        id: "q11_5",
        type: "sentence_building",
        instruction: "Gapni to'g'ri tartibda yig'ing:",
        question: "Biz kecha ajoyib film tomosha qildik:",
        options: ["We", "watched", "a", "great", "movie", "yesterday."],
        answer: "We watched a great movie yesterday.",
        explanation: "Ega (We) + fe'l (watched) + to'ldiruvchi (a great movie) + vaqt (yesterday)."
      }
    ]
  },
  {
    id: 12,
    stage: "Pre-Intermediate",
    stageId: 3,
    title: "Past Continuous vs Past Simple",
    topic: "Davomli va oddiy o'tgan zamon",
    xpReward: 20,
    questions: [
      {
        id: "q12_1",
        type: "grammar",
        instruction: "To'g'ri zamon shaklini tanlang:",
        question: "While I ___ down the street, it started to rain.",
        options: ["was walking", "walked", "am walking"],
        answer: "was walking",
        explanation: "'While' uzoq davom etgan jarayonni bildiradi: was walking."
      },
      {
        id: "q12_2",
        type: "multiple_choice",
        instruction: "Davomli o'tgan harakatni aniqlang:",
        question: "What were they doing when the alarm went off?",
        options: ["They were having a meeting.", "They had a meeting.", "They are having a meeting."],
        answer: "They were having a meeting.",
        explanation: "Voqea yuz berganda davom etayotgan harakat: were having a meeting."
      },
      {
        id: "q12_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Telefon jiringlaganda men uxlab yotgan edim"',
        options: ["I was sleeping when the phone rang", "I slept when the phone was ringing", "I am sleeping when the phone rang"],
        answer: "I was sleeping when the phone rang",
        explanation: "Davomli jarayon 'was sleeping', uni bo'lgan qisqa voqea esa 'rang'."
      },
      {
        id: "q12_4",
        type: "fill_blank",
        instruction: "Yordamchi fe'lni tanlang:",
        question: "The students ___ taking a test at 10 AM yesterday.",
        options: ["were", "was", "are"],
        answer: "were",
        explanation: "'The students' ko'plik ot bo'lgani uchun 'were' to'g'ri keladi."
      },
      {
        id: "q12_5",
        type: "sentence_building",
        instruction: "Gapni tuzing:",
        question: "Mehmonlar kelganda u ovqat pishirayotgan edi:",
        options: ["She", "was", "cooking", "when", "guests", "arrived."],
        answer: "She was cooking when guests arrived.",
        explanation: "Past Continuous (was cooking) + when + Past Simple (arrived)."
      }
    ]
  },
  {
    id: 13,
    stage: "Pre-Intermediate",
    stageId: 3,
    title: "Future Forms: Will & Going To",
    topic: "Kelasi zamon shakllari (Bashorat va Rejalar)",
    xpReward: 20,
    questions: [
      {
        id: "q13_1",
        type: "grammar",
        instruction: "Aniq dalilga asoslangan bashoratni tanlang:",
        question: "Look at those dark storm clouds! It ___ rain very soon.",
        options: ["is going to", "will", "rains"],
        answer: "is going to",
        explanation: "Ko'z oldimizdagi aniq dalil (dark clouds) asosida 'is going to' ishlatiladi."
      },
      {
        id: "q13_2",
        type: "multiple_choice",
        instruction: "Shaxsiy fikr va gumonga mos kelasi zamon:",
        question: "I believe technology ___ change our world significantly.",
        options: ["will", "is going to", "does"],
        answer: "will",
        explanation: "'I believe / think' kabi shaxsiy fikr bildirilganda 'will' ishlatiladi."
      },
      {
        id: "q13_3",
        type: "translation",
        instruction: "Rejalashtirilgan niyatning to'g'ri tarjimasi:",
        question: '"Men yangi chet tilini o‘rganmoqchiman (rejam bor)"',
        options: ["I am going to learn a new language", "I will learn a new language", "I learn a new language"],
        answer: "I am going to learn a new language",
        explanation: "Oldindan belgilangan aniq reja va maqsad uchun 'be going to' to'g'ri."
      },
      {
        id: "q13_4",
        type: "fill_blank",
        instruction: "Spontan qaror uchun mos shakl:",
        question: "Don't carry that heavy box alone; I ___ help you.",
        options: ["will", "am going to", "must"],
        answer: "will",
        explanation: "Nutq vaqtida berilgan spontan yordam qarori uchun 'will' ishlatiladi."
      },
      {
        id: "q13_5",
        type: "sentence_building",
        instruction: "Reja gapini tuzing:",
        question: "Biz yozda sayohat qilmoqchimiz:",
        options: ["We", "are", "going", "to", "travel", "in", "summer."],
        answer: "We are going to travel in summer.",
        explanation: "Tuzilishi: We + are going to + travel + in summer."
      }
    ]
  },
  {
    id: 14,
    stage: "Pre-Intermediate",
    stageId: 3,
    title: "Comparatives & Superlatives",
    topic: "Sifat darajalari (qiyosiy va orttirma)",
    xpReward: 20,
    questions: [
      {
        id: "q14_1",
        type: "grammar",
        instruction: "Qiyosiy daraja shaklini tanlang:",
        question: "Canada is ___ than France in land area.",
        options: ["larger", "more large", "the largest"],
        answer: "larger",
        explanation: "Bir bo'g'inli sifatlar qiyosiy darajada '-er' qo'shimchasini oladi."
      },
      {
        id: "q14_2",
        type: "multiple_choice",
        instruction: "'Bad' sifatining orttirma darajasini toping:",
        question: "What is the superlative form of 'bad'?",
        options: ["The worst", "The baddest", "Worse"],
        answer: "The worst",
        explanation: "'Bad' noto'g'ri sifat bo'lib, uning orttirma darajasi 'the worst' bo'ladi."
      },
      {
        id: "q14_3",
        type: "translation",
        instruction: "To'g'ri tarjimani tanlang:",
        question: '"Bu binoning shahardagi eng baland bino ekani"',
        options: ["It is the tallest building in the city", "It is taller building in the city", "It is the most tall building in the city"],
        answer: "It is the tallest building in the city",
        explanation: "'Tall' bir bo'g'inli sifat bo'lib, orttirmasi 'the tallest' bo'ladi."
      },
      {
        id: "q14_4",
        type: "fill_blank",
        instruction: "Bo'sh joyni to'ldiring:",
        question: "This puzzle is much ___ difficult than the previous one.",
        options: ["more", "most", "many"],
        answer: "more",
        explanation: "Ko'p bo'g'inli sifatlarda qiyoslash uchun 'more' ishlatiladi."
      },
      {
        id: "q14_5",
        type: "sentence_building",
        instruction: "Qiyosiy gap tuzing:",
        question: "Salomatlik boylikdan muhimroq:",
        options: ["Health", "is", "more", "important", "than", "wealth."],
        answer: "Health is more important than wealth.",
        explanation: "Struktura: Health is more important than wealth."
      }
    ]
  },
  {
    id: 15,
    stage: "Pre-Intermediate",
    stageId: 3,
    title: "Modal Verbs: Can, Must, Should",
    topic: "Modal fe'llar (imkoniyat, tavsiya, majburiyat)",
    xpReward: 20,
    questions: [
      {
        id: "q15_1",
        type: "grammar",
        instruction: "Tavsiya bildiruvchi modal fe'lni tanlang:",
        question: "You have a high fever. You ___ see a doctor today.",
        options: ["should", "might", "can"],
        answer: "should",
        explanation: "Maslahat va tavsiya berishda 'should' modal fe'li ishlatiladi."
      },
      {
        id: "q15_2",
        type: "multiple_choice",
        instruction: "Qat'iy taqiqni bildiruvchi shaklni toping:",
        question: "Which modal verb expresses strict prohibition?",
        options: ["Mustn't", "Shouldn't", "Don't have to"],
        answer: "Mustn't",
        explanation: "'Mustn't' qat'iy taqiqni (mumkin emas!) ifodalaydi."
      },
      {
        id: "q15_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"U beshta tilda bemalol gaplasha oladi"',
        options: ["He can speak five languages fluently", "He must speak five languages fluently", "He should speak five languages fluently"],
        answer: "He can speak five languages fluently",
        explanation: "Qobiliyat va imkoniyat uchun 'can' ishlatiladi."
      },
      {
        id: "q15_4",
        type: "fill_blank",
        instruction: "Qat'iy qoida uchun mos modal fe'l:",
        question: "Drivers ___ stop when the traffic light is red.",
        options: ["must", "can", "may"],
        answer: "must",
        explanation: "Qonuniy qat'iy talab va majburiyat uchun 'must' ishlatiladi."
      },
      {
        id: "q15_5",
        type: "sentence_building",
        instruction: "Maslahat gapini yig'ing:",
        question: "Siz har kuni ko'proq suv ichishingiz kerak:",
        options: ["You", "should", "drink", "more", "water", "daily."],
        answer: "You should drink more water daily.",
        explanation: "Ega (You) + should + fe'l (drink) + to'ldiruvchi (more water) + ravish (daily)."
      }
    ]
  },

  // ==========================================
  // STAGE 4: INTERMEDIATE (Levels 16–20)
  // ==========================================
  {
    id: 16,
    stage: "Intermediate",
    stageId: 4,
    title: "Present Perfect Tense",
    topic: "Hozirgi tugallangan zamon (Tajriba va Natija)",
    xpReward: 20,
    questions: [
      {
        id: "q16_1",
        type: "grammar",
        instruction: "Vaqt boshlanish nuqtasi uchun predlog:",
        question: "I haven't seen David ___ last month.",
        options: ["since", "for", "ago"],
        answer: "since",
        explanation: "Aniq boshlang'ich payt (last month) bilan 'since' qo'yiladi."
      },
      {
        id: "q16_2",
        type: "multiple_choice",
        instruction: "Hayotiy tajriba so'rog'ida to'g'ri so'z:",
        question: "Have you ___ visited London in your life?",
        options: ["ever", "never", "yet"],
        answer: "ever",
        explanation: "Hayotiy tajribani so'rashda so'roq gaplarda 'ever' ishlatiladi."
      },
      {
        id: "q16_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Ular hozirgina yangi uy sotib olishdi"',
        options: ["They have just bought a new house", "They just bought a new house", "They have already buy a new house"],
        answer: "They have just bought a new house",
        explanation: "Hozirgina yakunlangan ish: have just + V3 (bought)."
      },
      {
        id: "q16_4",
        type: "fill_blank",
        instruction: "Fe'lning 3-shaklini tanlang:",
        question: "She has already ___ three bestsellers this year.",
        options: ["written", "wrote", "write"],
        answer: "written",
        explanation: "Present Perfect da 'have/has' dan so'ng fe'lning 3-shakli (written) ishlatiladi."
      },
      {
        id: "q16_5",
        type: "sentence_building",
        instruction: "Tajriba ifodasini tuzing:",
        question: "Men ilgari hech qachon sushi yeb ko'rmaganman:",
        options: ["I", "have", "never", "tried", "sushi", "before."],
        answer: "I have never tried sushi before.",
        explanation: "Ega (I) + have + never + V3 (tried) + to'ldiruvchi (sushi) + before."
      }
    ]
  },
  {
    id: 17,
    stage: "Intermediate",
    stageId: 4,
    title: "Passive Voice",
    topic: "Majhul nisbat (Present & Past Passive)",
    xpReward: 20,
    questions: [
      {
        id: "q17_1",
        type: "grammar",
        instruction: "O'tgan zamon majhul nisbat fe'li:",
        question: "The Mona Lisa ___ painted by Leonardo da Vinci.",
        options: ["was", "is", "were"],
        answer: "was",
        explanation: "O'tgan zamondagi birlik ega uchun 'was painted' ishlatiladi."
      },
      {
        id: "q17_2",
        type: "multiple_choice",
        instruction: "To'g'ri hozirgi zamon majhul nisbatini tanlang:",
        question: "Coffee ___ grown in over seventy countries worldwide.",
        options: ["is", "are", "was"],
        answer: "is",
        explanation: "'Coffee' sanalmaydigan birlik ot bo'lgani sababli 'is grown' to'g'ri."
      },
      {
        id: "q17_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Yangi maktab o‘tgan yili qurildi"',
        options: ["The new school was built last year", "The new school built last year", "The new school is built last year"],
        answer: "The new school was built last year",
        explanation: "O'tgan zamondagi majhul nisbat: was built."
      },
      {
        id: "q17_4",
        type: "fill_blank",
        instruction: "Past participle shaklini qo'ying:",
        question: "The legal documents were ___ by the CEO.",
        options: ["signed", "sign", "signing"],
        answer: "signed",
        explanation: "Passive Voice da fe'lning o'tgan zamon sifatdoshi (signed) bo'lishi shart."
      },
      {
        id: "q17_5",
        type: "sentence_building",
        instruction: "Majhul nisbatdagi jumlani tuzing:",
        question: "Ingliz tili butun dunyoda gapiriladi:",
        options: ["English", "is", "spoken", "all", "over", "the", "world."],
        answer: "English is spoken all over the world.",
        explanation: "English + is + spoken (V3) + all over the world."
      }
    ]
  },
  {
    id: 18,
    stage: "Intermediate",
    stageId: 4,
    title: "Conditionals: First & Second",
    topic: "Shart ergash gaplar (1- va 2-turlar)",
    xpReward: 20,
    questions: [
      {
        id: "q18_1",
        type: "grammar",
        instruction: "Ilmiy haqiqat shart shakli (Zero conditional):",
        question: "If you heat ice, it ___ naturally.",
        options: ["melts", "will melt", "melted"],
        answer: "melts",
        explanation: "Ilmiy haqiqatlarda ikkala qismda ham Present Simple ishlatiladi: melts."
      },
      {
        id: "q18_2",
        type: "multiple_choice",
        instruction: "Xayoliy shart gapda bosh gap fe'lini tanlang:",
        question: "If I won a million dollars, I ___ buy an island.",
        options: ["would", "will", "can"],
        answer: "would",
        explanation: "2-turdagi noreal shart gapda 'would + V1' qo'llaniladi."
      },
      {
        id: "q18_3",
        type: "translation",
        instruction: "To'g'ri 1-shart tarjimasini tanlang:",
        question: '"Agar ertaga havo yaxshi bo‘lsa, biz parkka boramiz"',
        options: ["If the weather is good tomorrow, we will go to the park", "If the weather will be good tomorrow, we go to the park", "If the weather was good tomorrow, we would go to the park"],
        answer: "If the weather is good tomorrow, we will go to the park",
        explanation: "1-turdagi shart: If + Present Simple, will + V1."
      },
      {
        id: "q18_4",
        type: "fill_blank",
        instruction: "Xayoliy holat uchun mos shakl:",
        question: "If I ___ you, I would accept that offer immediately.",
        options: ["were", "am", "was"],
        answer: "were",
        explanation: "2-shartda 'I' olmoshi bilan rasmiy qoidaga ko'ra 'were' ishlatiladi."
      },
      {
        id: "q18_5",
        type: "sentence_building",
        instruction: "Shart gapini yig'ing:",
        question: "Agar yomg'ir yog'sa, biz ichkarida qolamiz:",
        options: ["If", "it", "rains,", "we", "will", "stay", "inside."],
        answer: "If it rains, we will stay inside.",
        explanation: "If it rains, we will stay inside."
      }
    ]
  },
  {
    id: 19,
    stage: "Intermediate",
    stageId: 4,
    title: "Relative Clauses",
    topic: "Aniqlovchi ergash gaplar (Who, Which, Where, Whose)",
    xpReward: 20,
    questions: [
      {
        id: "q19_1",
        type: "grammar",
        instruction: "Odamlarga nisbatan olmoshni tanlang:",
        question: "The teacher ___ teaches chemistry is very patient.",
        options: ["who", "which", "where"],
        answer: "who",
        explanation: "Insonlarga nisbatan 'who' (kimki) nisbiy olmoshi ishlatiladi."
      },
      {
        id: "q19_2",
        type: "multiple_choice",
        instruction: "Joy va manzilga ishora qiluvchi olmosh:",
        question: "That is the museum ___ we saw ancient dinosaur bones.",
        options: ["where", "which", "that"],
        answer: "where",
        explanation: "Voqea yuz bergan joy uchun 'where' (qayerdaki) qo'yiladi."
      },
      {
        id: "q19_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"Men kecha sotib olgan kompyuter juda tez ishlaydi"',
        options: ["The computer that I bought yesterday works very fast", "The computer who I bought yesterday works very fast", "The computer where I bought yesterday works very fast"],
        answer: "The computer that I bought yesterday works very fast",
        explanation: "Buyumlar uchun 'that' yoki 'which' nisbiy olmoshi ishlatiladi."
      },
      {
        id: "q19_4",
        type: "fill_blank",
        instruction: "Egalik nisbiy olmoshini toping:",
        question: "Do you know the student ___ bicycle was stolen?",
        options: ["whose", "who", "which"],
        answer: "whose",
        explanation: "Egalik ma'nosi uchun 'whose' (uning / kimningki) ishlatiladi."
      },
      {
        id: "q19_5",
        type: "sentence_building",
        instruction: "Gapni to'g'ri tartibda yig'ing:",
        question: "U bu kitobni yozgan muallifdir:",
        options: ["She", "is", "the", "author", "who", "wrote", "this", "book."],
        answer: "She is the author who wrote this book.",
        explanation: "She is the author who wrote this book."
      }
    ]
  },
  {
    id: 20,
    stage: "Intermediate",
    stageId: 4,
    title: "Gerunds & Infinitives",
    topic: "Gerundiy (-ing) va Infinitiv (to + V)",
    xpReward: 20,
    questions: [
      {
        id: "q20_1",
        type: "grammar",
        instruction: "'Avoid' fe'lidan keyingi to'g'ri shakl:",
        question: "She avoided ___ to him about the sensitive issue.",
        options: ["talking", "to talk", "talk"],
        answer: "talking",
        explanation: "'Avoid' fe'lidan so'ng har doim Gerundiy (-ing) shakli keladi."
      },
      {
        id: "q20_2",
        type: "multiple_choice",
        instruction: "'Decide' fe'lidan keyingi to'g'ri shakl:",
        question: "We decided ___ our trip until the spring season.",
        options: ["to postpone", "postponing", "postpone"],
        answer: "to postpone",
        explanation: "'Decide' fe'lidan keyin to-infinitive (to postpone) ishlatiladi."
      },
      {
        id: "q20_3",
        type: "translation",
        instruction: "To'g'ri tarjimani belgilang:",
        question: '"U bo‘sh vaqtida musiqa tinglashdan rohatlanadi"',
        options: ["She enjoys listening to music in her free time", "She enjoys to listen to music in her free time", "She enjoys listen to music in her free time"],
        answer: "She enjoys listening to music in her free time",
        explanation: "'Enjoy' fe'li o'zidan keyin Gerundiy talab qiladi: enjoys listening."
      },
      {
        id: "q20_4",
        type: "fill_blank",
        instruction: "Kelajakdagi vazifani unutmaslik uchun:",
        question: "Don't forget ___ the entrance door before going out.",
        options: ["to lock", "locking", "lock"],
        answer: "to lock",
        explanation: "Bajarilishi lozim bo'lgan vazifada 'forget to do' qo'llaniladi."
      },
      {
        id: "q20_5",
        type: "sentence_building",
        instruction: "Infinitivli gap tuzing:",
        question: "U shartnomani imzolashdan bosh tortdi:",
        options: ["He", "refused", "to", "sign", "the", "contract."],
        answer: "He refused to sign the contract.",
        explanation: "'Refuse' fe'li to-infinitive bilan keladi: He refused to sign the contract."
      }
    ]
  },

  // ==========================================
  // STAGE 5: ADVANCED (Levels 21–25)
  // ==========================================
  {
    id: 21,
    stage: "Advanced",
    stageId: 5,
    title: "Third & Mixed Conditionals",
    topic: "3-tur va aralash shart ergash gaplar",
    xpReward: 20,
    questions: [
      {
        id: "q21_1",
        type: "grammar",
        instruction: "3-shart bosh gapidagi to'g'ri fe'l shakli:",
        question: "If we had left earlier, we ___ the flight.",
        options: ["would not have missed", "would not miss", "will not miss"],
        answer: "would not have missed",
        explanation: "3-shart (o'tmishdagi noreal): If + Past Perfect, would have + V3."
      },
      {
        id: "q21_2",
        type: "multiple_choice",
        instruction: "Inversiv shart jumlasining turini aniqlang:",
        question: "What structure is 'Had I known about the danger, I would have fled'?",
        options: ["Inverted 3rd Conditional", "2nd Conditional", "Zero Conditional"],
        answer: "Inverted 3rd Conditional",
        explanation: "'Had I known...' bu 'If I had known...' ning rasmiy inversiya shaklidir."
      },
      {
        id: "q21_3",
        type: "translation",
        instruction: "To'g'ri o'tmish shart tarjimasini toping:",
        question: '"Agar sen menga aytganingda, men bilgan bo‘lardim"',
        options: ["If you had told me, I would have known", "If you told me, I would know", "If you tell me, I will know"],
        answer: "If you had told me, I would have known",
        explanation: "O'tmishdagi amalga oshmagan vaziyat: If + had told, would have known."
      },
      {
        id: "q21_4",
        type: "fill_blank",
        instruction: "Mixed conditional bosh gapiga mos fe'l:",
        question: "If he had taken his medicine yesterday, he ___ be fine today.",
        options: ["would", "will", "had"],
        answer: "would",
        explanation: "Aralash shartda: o'tgan zamondagi sabab hozirgi natijaga (would be today) ta'sir qiladi."
      },
      {
        id: "q21_5",
        type: "sentence_building",
        instruction: "3-shart jumlasini yig'ing:",
        question: "Agar u tayyorgarlik ko'rganida, o'tgan bo'lardi:",
        options: ["She", "would", "have", "passed", "if", "she", "had", "prepared."],
        answer: "She would have passed if she had prepared.",
        explanation: "She would have passed if she had prepared."
      }
    ]
  },
  {
    id: 22,
    stage: "Advanced",
    stageId: 5,
    title: "Advanced Phrasal Verbs & Idioms",
    topic: "Murakkab iboraviy fe'llar va idiomalar",
    xpReward: 20,
    questions: [
      {
        id: "q22_1",
        type: "multiple_choice",
        instruction: "'Bekor qilish' ma'nosidagi iboraviy fe'lni tanlang:",
        question: "The organizers had to ___ the outdoor festival due to torrential rain.",
        options: ["call off", "call in", "call on"],
        answer: "call off",
        explanation: "'Call off' iboraviy fe'li 'bekor qilmoq' (cancel) ma'nosini anglatadi."
      },
      {
        id: "q22_2",
        type: "translation",
        instruction: "Mashhur idiomanning to'g'ri ma'nosi:",
        question: '"Once in a blue moon" idiomsining ma\'nosi nima?',
        options: ["Juda kamdan-kam hollarda", "Har kuni muntazam", "Tunda oydin havoda"],
        answer: "Juda kamdan-kam hollarda",
        explanation: "'Once in a blue moon' nihoyatda kamdan-kam ro'y beradigan hodisalar uchun ishlatiladi."
      },
      {
        id: "q22_3",
        type: "grammar",
        instruction: "'Look forward to' dan keyingi to'g'ri shakl:",
        question: "I am really looking forward to ___ you at the symposium.",
        options: ["meeting", "meet", "to meet"],
        answer: "meeting",
        explanation: "'Look forward to' birikmasidagi 'to' predlog bo'lgani sababli undan keyin V-ing keladi."
      },
      {
        id: "q22_4",
        type: "fill_blank",
        instruction: "Mos iboraviy fe'l qismini qo'ying:",
        question: "He decided to give ___ smoking for the sake of his health.",
        options: ["up", "in", "away"],
        answer: "up",
        explanation: "'Give up' - zararli odatdan voz kechmoq, tashlamoq."
      },
      {
        id: "q22_5",
        type: "sentence_building",
        instruction: "Iboraviy gap tuzing:",
        question: "Muzokaralar so'nggi daqiqada barbod bo'ldi:",
        options: ["The", "negotiations", "fell", "through", "at", "the", "last", "minute."],
        answer: "The negotiations fell through at the last minute.",
        explanation: "'Fall through' - kelishuv yoki rejalar amalga oshmay qolishi."
      }
    ]
  },
  {
    id: 23,
    stage: "Advanced",
    stageId: 5,
    title: "Inversion & Emphatic Structures",
    topic: "Inversiya va ta'kidlovchi gap qurilmalari",
    xpReward: 20,
    questions: [
      {
        id: "q23_1",
        type: "grammar",
        instruction: "Inversiya qoidasiga mos to'g'ri variant:",
        question: "Seldom ___ such breathtaking scenery in modern cinematography.",
        options: ["have I seen", "I have seen", "did I seen"],
        answer: "have I seen",
        explanation: "Cheklovchi 'Seldom' gap boshida kelganda yordamchi fe'l egadan oldinga o'tadi."
      },
      {
        id: "q23_2",
        type: "multiple_choice",
        instruction: "'No sooner' bilan qo'llanuvchi bog'lovchini tanlang:",
        question: "No sooner had he entered the boardroom ___ the phone rang.",
        options: ["than", "when", "then"],
        answer: "than",
        explanation: "'No sooner... than' doimiy uzviy bog'lovchi juftlikdir."
      },
      {
        id: "q23_3",
        type: "translation",
        instruction: "Ta'kidlovchi inversiv gapning tarjimasi:",
        question: '"U xavf haqida mutlaqo tasavvurga ham ega emas edi"',
        options: ["Little did he know about the danger", "He knew little about the danger", "Not only he knew the danger"],
        answer: "Little did he know about the danger",
        explanation: "'Little did he know' kuchaytirilgan inversiya vositasidir."
      },
      {
        id: "q23_4",
        type: "fill_blank",
        instruction: "Inversiv yordamchi fe'lni qo'ying:",
        question: "Only after submitting the thesis ___ he finally relax.",
        options: ["did", "was", "has"],
        answer: "did",
        explanation: "'Only after...' iborasidan so'ng asosiy gapda inversiya (did he relax) sodir bo'ladi."
      },
      {
        id: "q23_5",
        type: "sentence_building",
        instruction: "Ta'kidlovchi gapni tartiblang:",
        question: "U nafaqat uzr so'radi, balki tovon ham to'ladi:",
        options: ["Not", "only", "did", "he", "apologize,", "he", "also", "compensated", "us."],
        answer: "Not only did he apologize, he also compensated us.",
        explanation: "Not only did he apologize, he also compensated us."
      }
    ]
  },
  {
    id: 24,
    stage: "Advanced",
    stageId: 5,
    title: "Reported Speech & Modal Deductions",
    topic: "O'zlashtirma gap va mantiqiy xulosalar",
    xpReward: 20,
    questions: [
      {
        id: "q24_1",
        type: "grammar",
        instruction: "O'tgan zamondagi mantiqiy ishonchli xulosani tanlang:",
        question: "The house is dark and their car is gone. They ___ left already.",
        options: ["must have", "should have", "can have"],
        answer: "must have",
        explanation: "O'tgan zamondagi ishonchli xulosa: must have + V3 (ular aniq ketgan bo'lishi kerak)."
      },
      {
        id: "q24_2",
        type: "multiple_choice",
        instruction: "'I will call tomorrow,' she said. To'g'ri o'zlashtirma shakli:",
        question: "Convert to reported speech: 'I will call you tomorrow,' she said.",
        options: ["She said that she would call me the following day.", "She said that she will call me tomorrow.", "She told she called me tomorrow."],
        answer: "She said that she would call me the following day.",
        explanation: "O'zlashtirmada 'will' -> 'would' ga, 'tomorrow' -> 'the following day' ga aylanadi."
      },
      {
        id: "q24_3",
        type: "translation",
        instruction: "O'tgan zamondagi afsus ma'nosidagi tarjima:",
        question: '"Sen bunchalik ko‘p pul sarflamasliging kerak edi (lekin sarflading)"',
        options: ["You shouldn't have spent so much money", "You mustn't have spent so much money", "You couldn't have spent so much money"],
        answer: "You shouldn't have spent so much money",
        explanation: "O'tmishdagi xato ishga taassuf: shouldn't have + V3."
      },
      {
        id: "q24_4",
        type: "fill_blank",
        instruction: "Imkonsizlik xulosasini bildiruvchi modal:",
        question: "He ___ have committed the crime because he was overseas at that time.",
        options: ["couldn't", "mustn't", "shouldn't"],
        answer: "couldn't",
        explanation: "O'tgan zamondagi imkonsizlik: couldn't have + V3 (qilgan bo'lishi mutlaqo imkonsiz)."
      },
      {
        id: "q24_5",
        type: "sentence_building",
        instruction: "O'zlashtirma so'roq gap tuzing:",
        question: "U mendan butun kun qayerda bo'lganimni so'radi:",
        options: ["He", "asked", "me", "where", "I", "had", "been", "all", "day."],
        answer: "He asked me where I had been all day.",
        explanation: "O'zlashtirma so'roqda to'g'ri so'z tartibi: He asked me where I had been all day."
      }
    ]
  },
  {
    id: 25,
    stage: "Advanced",
    stageId: 5,
    title: "Academic & Nuanced Vocabulary Mastery",
    topic: "Akademik va nozik ma'nodagi lug'at boyligi",
    xpReward: 25,
    questions: [
      {
        id: "q25_1",
        type: "multiple_choice",
        instruction: "Akademik so'zning eng aniq ma'nosini toping:",
        question: "The word 'ubiquitous' most precisely means:",
        options: ["Present or appearing everywhere", "Extremely hazardous", "Obsolete and forgotten"],
        answer: "Present or appearing everywhere",
        explanation: "'Ubiquitous' hamma yerda uchraydigan, keng yoyilgan ma'nosini anglatadi."
      },
      {
        id: "q25_2",
        type: "translation",
        instruction: "Akademik tarjimani toping:",
        question: '"Tadqiqotchilar eksperiment natijalarini sinchkovlik bilan tekshirishdi"',
        options: ["Researchers scrutinized the experimental results thoroughly", "Researchers deteriorated the experimental results thoroughly", "Researchers neglected the experimental results thoroughly"],
        answer: "Researchers scrutinized the experimental results thoroughly",
        explanation: "'Scrutinize' - nihoyatda sinchkovlik va diqqat bilan o'rganmoq / tekshirmoq."
      },
      {
        id: "q25_3",
        type: "grammar",
        instruction: "'Ta'sirini yumshatish / kamaytirish' fe'lini tanlang:",
        question: "The government implemented proactive policies to ___ economic instability.",
        options: ["mitigate", "exacerbate", "obfuscate"],
        answer: "mitigate",
        explanation: "'Mitigate' - zararli ta'sirni kamaytirish va yumshatishni bildiradi."
      },
      {
        id: "q25_4",
        type: "fill_blank",
        instruction: "Mos akademik otni tanlang:",
        question: "Her remarkable psychological ___ enabled her to triumph over severe adversity.",
        options: ["resilience", "reluctance", "complacency"],
        answer: "resilience",
        explanation: "'Resilience' - ruhiy bardoshlilik va qiyinchiliklardan so'ng tez tiklana olish fazilati."
      },
      {
        id: "q25_5",
        type: "sentence_building",
        instruction: "Akademik jumlani tartib bilan tuzing:",
        question: "Tanqidiy fikrlash ilmiy muvaffaqiyat uchun nihoyatda zarurdir:",
        options: ["Critical", "thinking", "is", "paramount", "for", "academic", "success."],
        answer: "Critical thinking is paramount for academic success.",
        explanation: "Critical thinking is paramount for academic success."
      }
    ]
  }
];

export function getLevel(id) {
  return levels.find(l => l.id === Number(id));
}

export function getTotalLevels() {
  return levels.length;
}
