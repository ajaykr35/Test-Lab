const questionBank = [
  {
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is 25% of 240?",
    options: ["40", "50", "60", "70"],
    answer: 2,
    explanation: "25% of 240 = 240 × 25 / 100 = 60.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question:
      "A number is increased from 200 to 250. What is the percentage increase?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "Increase = 50. Percentage increase = 50/200 × 100 = 25%.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the average of 10, 20, 30, 40 and 50?",
    options: ["25", "30", "35", "40"],
    answer: 1,
    explanation: "Sum = 150. Average = 150/5 = 30.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question:
      "A product costs ₹800 and is sold for ₹960. What is the profit percentage?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 1,
    explanation: "Profit = 160. Profit percentage = 160/800 × 100 = 20%.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question:
      "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
    options: ["15", "20", "25", "30"],
    answer: 1,
    explanation: "3 parts = 30, so 1 part = 10. Girls = 2 × 10 = 20.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question: "A train travels 360 km in 6 hours. What is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: 2,
    explanation: "Speed = Distance/Time = 360/6 = 60 km/h.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question:
      "What is the simple interest on ₹5000 at 10% per annum for 2 years?",
    options: ["₹500", "₹800", "₹1000", "₹1200"],
    answer: 2,
    explanation: "SI = PRT/100 = 5000 × 10 × 2 / 100 = ₹1000.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question:
      "If 5 workers complete a job in 12 days, how many days will 10 workers take, assuming equal efficiency?",
    options: ["4", "5", "6", "8"],
    answer: 2,
    explanation:
      "Workers and days are inversely proportional. 5 × 12 = 10 × days, so days = 6.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the next number in the series 2, 4, 8, 16, ?",
    options: ["20", "24", "30", "32"],
    answer: 3,
    explanation:
      "Each number is multiplied by 2. Therefore, next number is 32.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question:
      "A shopkeeper gives a 10% discount on an item marked ₹1000. What is the selling price?",
    options: ["₹850", "₹900", "₹950", "₹990"],
    answer: 1,
    explanation: "Discount = ₹100. Selling price = ₹1000 - ₹100 = ₹900.",
  },

  {
    category: "Aptitude",
    difficulty: "Hard",
    question: "If x + 1/x = 5, what is x² + 1/x²?",
    options: ["21", "23", "25", "27"],
    answer: 1,
    explanation:
      "(x + 1/x)² = x² + 2 + 1/x². Therefore x² + 1/x² = 25 - 2 = 23.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question:
      "A can complete a work in 10 days and B can complete it in 15 days. How long will they take together?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    answer: 1,
    explanation:
      "Combined work rate = 1/10 + 1/15 = 1/6. Therefore, they take 6 days.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the HCF of 24 and 36?",
    options: ["6", "8", "12", "18"],
    answer: 2,
    explanation: "The highest common factor of 24 and 36 is 12.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the LCM of 8 and 12?",
    options: ["16", "20", "24", "32"],
    answer: 2,
    explanation: "The least common multiple of 8 and 12 is 24.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question:
      "A man spends 70% of his income. If his income is ₹20,000, how much does he save?",
    options: ["₹4000", "₹5000", "₹6000", "₹7000"],
    answer: 2,
    explanation: "Savings = 30% of ₹20,000 = ₹6000.",
  },

  {
    category: "Aptitude",
    difficulty: "Hard",
    question:
      "If the price of an article is increased by 20% and then decreased by 20%, what is the net change?",
    options: ["No change", "4% increase", "4% decrease", "8% decrease"],
    answer: 2,
    explanation:
      "Take 100. After 20% increase = 120. After 20% decrease = 96. Net decrease = 4%.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question:
      "A car covers 150 km in 3 hours. How much distance will it cover in 5 hours at the same speed?",
    options: ["200 km", "225 km", "250 km", "300 km"],
    answer: 2,
    explanation: "Speed = 150/3 = 50 km/h. In 5 hours, distance = 250 km.",
  },

  {
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is 3/5 of 100?",
    options: ["40", "50", "60", "75"],
    answer: 2,
    explanation: "3/5 × 100 = 60.",
  },

  {
    category: "Aptitude",
    difficulty: "Medium",
    question: "If 12 pens cost ₹240, what is the cost of 5 pens?",
    options: ["₹80", "₹90", "₹100", "₹120"],
    answer: 2,
    explanation: "One pen costs ₹20. Therefore, 5 pens cost ₹100.",
  },

  {
    category: "Aptitude",
    difficulty: "Hard",
    question:
      "The average age of 5 people is 24 years. If one person leaves and the average becomes 22 years, what is the age of the person who left?",
    options: ["30", "32", "34", "36"],
    answer: 2,
    explanation:
      "Original total = 5 × 24 = 120. New total = 4 × 22 = 88. Age of person = 120 - 88 = 32.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "Find the next number: 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    answer: 1,
    explanation: "The sequence increases by 2, so the next number is 10.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "Find the odd one out.",
    options: ["Apple", "Mango", "Banana", "Carrot"],
    answer: 3,
    explanation: "Carrot is a vegetable while the others are fruits.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question: "If CAT is coded as DBU, how is DOG coded?",
    options: ["EPH", "EOG", "FPH", "DPH"],
    answer: 0,
    explanation: "Each letter is shifted one position forward. D→E, O→P, G→H.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "If SOUTH is written as HTUOS, how is NORTH written?",
    options: ["HTRON", "NROTH", "HTORN", "TRONH"],
    answer: 0,
    explanation: "The word is written in reverse order. NORTH becomes HTRON.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question:
      "A person walks 5 km north and then 3 km east. In which direction is he from the starting point?",
    options: ["North-West", "North-East", "South-East", "South-West"],
    answer: 1,
    explanation:
      "Moving north and then east places the person in the North-East direction.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "Complete the series: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    answer: 1,
    explanation: "The series skips one letter each time. After G comes I.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question:
      "If all roses are flowers and some flowers are red, which statement is definitely true?",
    options: [
      "All roses are red",
      "Some roses are red",
      "All roses are flowers",
      "No roses are flowers",
    ],
    answer: 2,
    explanation: "The only definite statement is that all roses are flowers.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "Find the missing number: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    answer: 2,
    explanation: "Each number is multiplied by 2. The next number is 80.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question: "If MONDAY is coded as 123456, what is the code for DAY?",
    options: ["456", "345", "234", "156"],
    answer: 0,
    explanation:
      "MONDAY corresponds to M-1, O-2, N-3, D-4, A-5, Y-6. Therefore DAY = 456.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "Which number does not belong to the group?",
    options: ["3", "5", "7", "9"],
    answer: 3,
    explanation: "3, 5 and 7 are prime numbers. 9 is not prime.",
  },

  {
    category: "Reasoning",
    difficulty: "Hard",
    question: "A is taller than B. B is taller than C. Who is the shortest?",
    options: ["A", "B", "C", "Cannot be determined"],
    answer: 2,
    explanation: "Since A > B > C in height, C is the shortest.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question: "Find the next term: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "36"],
    answer: 2,
    explanation: "These are squares: 1², 2², 3², 4². Next is 5² = 25.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "If today is Monday, what day will it be after 10 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answer: 1,
    explanation: "10 days after Monday is Thursday.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question: "Which word cannot be formed using the letters of COMPUTER?",
    options: ["COME", "MUTE", "ROPE", "TERM"],
    answer: 3,
    explanation: "TERM requires a second T, but COMPUTER contains only one T.",
  },

  {
    category: "Reasoning",
    difficulty: "Hard",
    question: "If 2 + 3 = 10, 3 + 4 = 21, and 4 + 5 = 36, then 5 + 6 = ?",
    options: ["45", "50", "55", "60"],
    answer: 2,
    explanation: "Pattern is a × (a+b). 5 × 11 = 55.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question:
      "A clock shows 3:00. What is the angle between the hour and minute hands?",
    options: ["60°", "90°", "120°", "180°"],
    answer: 1,
    explanation:
      "At 3:00, the hour hand is at 3 and minute hand at 12, making 90°.",
  },

  {
    category: "Reasoning",
    difficulty: "Easy",
    question: "Find the missing letter: B, D, F, H, ?",
    options: ["I", "J", "K", "L"],
    answer: 1,
    explanation: "Letters increase by two positions: B, D, F, H, J.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question:
      "If 6 people sit in a row and Ravi is at the extreme left, where can Ravi sit?",
    options: ["1st position", "3rd position", "4th position", "6th position"],
    answer: 0,
    explanation: "Extreme left means the first position.",
  },

  {
    category: "Reasoning",
    difficulty: "Hard",
    question:
      "A family has two parents and three children. How many people are there in total?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    explanation: "Two parents + three children = 5 people.",
  },

  {
    category: "Reasoning",
    difficulty: "Medium",
    question: "Find the next number: 3, 6, 12, 24, ?",
    options: ["36", "42", "48", "52"],
    answer: 2,
    explanation: "Each term is multiplied by 2. Next is 48.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the synonym of 'Happy'.",
    options: ["Sad", "Joyful", "Angry", "Weak"],
    answer: 1,
    explanation: "Joyful means happy.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the antonym of 'Ancient'.",
    options: ["Old", "Historic", "Modern", "Traditional"],
    answer: 2,
    explanation: "Modern is the opposite of ancient.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Choose the correct sentence.",
    options: [
      "He go to school every day.",
      "He goes to school every day.",
      "He going to school every day.",
      "He gone to school every day.",
    ],
    answer: 1,
    explanation: "With the singular subject 'He', the verb should be 'goes'.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the correct spelling.",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    answer: 1,
    explanation: "The correct spelling is Receive.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Fill in the blank: She is good ___ mathematics.",
    options: ["in", "at", "on", "for"],
    answer: 1,
    explanation: "The correct phrase is 'good at mathematics'.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "What is the plural of 'Child'?",
    options: ["Childs", "Childes", "Children", "Childrens"],
    answer: 2,
    explanation: "The correct plural form is Children.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Choose the synonym of 'Rapid'.",
    options: ["Slow", "Fast", "Weak", "Late"],
    answer: 1,
    explanation: "Rapid means fast or quick.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the antonym of 'Expand'.",
    options: ["Increase", "Grow", "Contract", "Extend"],
    answer: 2,
    explanation: "Contract means to become smaller, opposite of expand.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Fill in the blank: I have been living here ___ 2020.",
    options: ["for", "since", "from", "at"],
    answer: 1,
    explanation: "Since is used with a specific starting point in time.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the correct article: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    answer: 1,
    explanation: "Honest begins with a vowel sound, so 'an' is used.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Choose the correctly punctuated sentence.",
    options: [
      "Lets eat, Rahul.",
      "Let's eat Rahul.",
      "Let's eat, Rahul.",
      "Lets eat Rahul.",
    ],
    answer: 2,
    explanation: "The correct sentence is 'Let's eat, Rahul.'",
  },

  {
    category: "Verbal Ability",
    difficulty: "Hard",
    question: "Choose the word closest in meaning to 'Benevolent'.",
    options: ["Cruel", "Kind", "Selfish", "Rude"],
    answer: 1,
    explanation: "Benevolent means kind and generous.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Choose the correct passive voice: 'The boy kicked the ball.'",
    options: [
      "The ball kicked the boy.",
      "The ball was kicked by the boy.",
      "The ball is kicked by the boy.",
      "The boy was kicked by the ball.",
    ],
    answer: 1,
    explanation:
      "The object becomes the subject in passive voice: The ball was kicked by the boy.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the correct meaning of 'Once in a blue moon'.",
    options: ["Very frequently", "Very rarely", "Every day", "Immediately"],
    answer: 1,
    explanation:
      "Once in a blue moon means something that happens very rarely.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Identify the adjective: 'She wore a beautiful dress.'",
    options: ["She", "Wore", "Beautiful", "Dress"],
    answer: 2,
    explanation: "Beautiful describes the noun dress, so it is an adjective.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Hard",
    question:
      "Choose the correct form: If I ___ rich, I would travel the world.",
    options: ["am", "was", "were", "be"],
    answer: 2,
    explanation:
      "For hypothetical situations, 'were' is traditionally used: If I were rich.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "Choose the synonym of 'Begin'.",
    options: ["End", "Start", "Stop", "Finish"],
    answer: 1,
    explanation: "Begin means start.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Medium",
    question: "Choose the correct sentence.",
    options: [
      "Neither Ram nor Shyam are present.",
      "Neither Ram nor Shyam is present.",
      "Neither Ram nor Shyam were present.",
      "Neither Ram nor Shyam be present.",
    ],
    answer: 1,
    explanation:
      "With neither...nor, the verb agrees with the nearer singular subject Shyam.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Easy",
    question: "What is the opposite of 'Victory'?",
    options: ["Success", "Defeat", "Win", "Achievement"],
    answer: 1,
    explanation: "Defeat is the opposite of victory.",
  },

  {
    category: "Verbal Ability",
    difficulty: "Hard",
    question:
      "Choose the correct word: The manager asked me to ___ the report.",
    options: ["review", "revise", "both A and B", "reviewed"],
    answer: 2,
    explanation:
      "Both review and revise can correctly fit the sentence depending on the intended meaning.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Computer Processing Utility",
    ],
    answer: 0,
    explanation: "CPU stands for Central Processing Unit.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: 1,
    explanation: "Stack follows Last In, First Out.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1,
    explanation: "Queue follows First In, First Out.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1,
    explanation:
      "Binary search halves the search space at each step, giving O(log n).",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "CSS", "Java", "SQL"],
    answer: 1,
    explanation: "CSS is used to style web pages.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which language is used to structure web pages?",
    options: ["CSS", "HTML", "SQL", "Python"],
    answer: 1,
    explanation: "HTML is used to structure web pages.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question:
      "Which OOP concept allows one class to acquire properties of another class?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    answer: 2,
    explanation:
      "Inheritance allows a class to acquire properties and methods of another class.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question: "Which OOP concept hides implementation details?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    answer: 3,
    explanation:
      "Abstraction hides implementation details and exposes essential functionality.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which SQL command is used to retrieve data?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: 2,
    explanation: "SELECT is used to retrieve data from a database.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which SQL command is used to remove a table?",
    options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
    answer: 1,
    explanation: "DROP TABLE removes the table and its structure.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 1,
    explanation: "Second Normal Form removes partial functional dependency.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question: "Which protocol is used to transfer web pages securely?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: 2,
    explanation: "HTTPS is HTTP secured using encryption such as TLS.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which operating system component manages hardware resources?",
    options: ["Compiler", "Kernel", "Browser", "Editor"],
    answer: 1,
    explanation:
      "The kernel manages CPU, memory, devices and other hardware resources.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question: "What is a deadlock in operating systems?",
    options: [
      "A process executing normally",
      "A process waiting indefinitely for resources",
      "A process using too much CPU",
      "A system startup process",
    ],
    answer: 1,
    explanation:
      "Deadlock occurs when processes wait indefinitely for resources held by each other.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which of these is a programming language?",
    options: ["HTTP", "Python", "HTML", "CSS"],
    answer: 1,
    explanation: "Python is a general-purpose programming language.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Hard",
    question:
      "What is the average time complexity of searching in a well-implemented hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 0,
    explanation: "Hash tables provide average-case O(1) search time.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question:
      "Which algorithm is commonly used to find the shortest path in a graph with non-negative edge weights?",
    options: [
      "Bubble Sort",
      "Dijkstra's Algorithm",
      "Binary Search",
      "Merge Sort",
    ],
    answer: 1,
    explanation:
      "Dijkstra's algorithm finds shortest paths from a source in graphs with non-negative edge weights.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Easy",
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["<!-- -->", "//", "#", "/* */"],
    answer: 1,
    explanation: "JavaScript uses // for single-line comments.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Medium",
    question: "Which database model stores data in tables?",
    options: ["Relational", "Hierarchical", "Network", "Object"],
    answer: 0,
    explanation:
      "Relational databases store data in tables consisting of rows and columns.",
  },

  {
    category: "CS Fundamentals",
    difficulty: "Hard",
    question:
      "Which protocol is responsible for translating domain names into IP addresses?",
    options: ["HTTP", "DNS", "FTP", "SSH"],
    answer: 1,
    explanation:
      "DNS translates human-readable domain names into IP addresses.",
  },
];
