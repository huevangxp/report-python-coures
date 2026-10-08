/**
 * ບົດລາຍງານຫຼັກສູດ Python ຂັ້ນສູງ (Advanced Python Engineering)
 * ອອກແບບເປັນສະໄລ້ບັນຍາຍ 100% ພາສາລາວ (ຄຳອະທິບາຍພາສາລາວ, ໂຄ້ດພາສາອັງກິດ)
 * ດຶງຂໍ້ມູນຈາກ: https://www.laoaitechnology.shop/
 */

const SLIDES_DATA = [
  // ==========================================
  // ສະໄລ້ທີ 0: ພາບລວມຫຼັກສູດ 3 ວັນ
  // ==========================================
  {
    id: "slide-overview",
    day: "all",
    dayLabel: "ພາບລວມຫຼັກສູດ 3 ວັນ",
    number: "ພາບລວມ",
    fileLabel: "curriculum_overview.py",
    title: "ແຜນຜັງ ແລະ ພາບລວມການຮຽນຮູ້ຫຼັກສູດ Python ຂັ້ນສູງ",
    subtitle: "ສະຫຼຸບການຮຽນຮູ້ຕະຫຼອດ 3 ວັນ: ມື້ທີ 1 (ໂມດູນ 1-2), ມື້ທີ 2 (ໂມດູນ 3-6), ແລະ ວັນສຸດທ້າຍ (ໂມດູນ 7-9)",
    overview: "ຫຼັກສູດນີ້ເນັ້ນໜັກການຍົກລະດັບຈາກການຂຽນໂຄ້ດພື້ນຖານ ໄປສູ່ວິສະວະກຳຊອບແວລະດັບມືອາຊີບ, ການຈັດການໜ່ວຍຄວາມຈຳຂັ້ນສູງ, ການປະມວນຜົນຫຼາຍວຽກພ້ອມກັນ ແລະ ການເຊື່ອມຕໍ່ລະບົບເຄືອຂ່າຍ.",
    whatWasLearned: [
      "ມື້ທີ 1 (ຮຽນ ໂມດູນ 1 ຫາ 2): ສະຖາປັດຕະຍະກຳລະບົບຫຼາຍຊັ້ນ, ຄຸນນະພາບຊອບແວລະດັບມືອາຊີບ 6 ດ້ານ ແລະ ການອອກແບບ OOP ຂັ້ນສູງ (Dunder Methods, ກົດລະບຽບ Invariants, ການປົກປ້ອງຂໍ້ມູນ Encapsulation)",
      "ມື້ທີ 2 (ຮຽນ ໂມດູນ 3 ຫາ 6): ການຈັດການສາຍທານຂໍ້ມູນດ້ວຍ Iterator & Generator, ການສ້າງທໍ່ລຳລຽງຂໍ້ມູນທີ່ປະຢັດໜ່ວຍຄວາມຈຳ O(1), Closures, Decorators ລະດັບໃຊ້ງານຈິງ ແລະ Functional Programming",
      "ວັນສຸດທ້າຍ (ຮຽນ ໂມດູນ 7 ຫາ 9): ກົນໄກໜ່ວຍຄວາມຈຳພາຍໃນ (References, Mutability, Slots), ການປະມວນຜົນພ້ອມກັນ (Multi-threading, GIL, Locks, AsyncIO) ແລະ ການຂຽນໂປຣແກຣມເຄືອຂ່າຍ Sockets / APIs"
    ],
    realWorldUse: "ນຳໃຊ້ສ້າງ ລະບົບຫຼັງບ້ານ (Backend APIs), ລະບົບບໍລິການຍ່ອຍ (Microservices), ທໍ່ລຳລຽງ ແລະ ປັບແຕ່ງຂໍ້ມູນຂະໜາດໃຫຍ່ (ETL Pipelines), ລະບົບທຸລະກຳການເງິນ ແລະ ລະບົບເຄືອຂ່າຍຄວາມໄວສູງ",
    labs: [
      { code: "ມື້ທີ 1", name: "2 ໂມດູນ", desc: "ສະຖາປັດຕະຍະກຳລະບົບ & OOP ຂັ້ນສູງ" },
      { code: "ມື້ທີ 2", name: "4 ໂມດູນ", desc: "Iterators, Generators, Closures & Functional Programming" },
      { code: "ວັນສຸດທ້າຍ", name: "3 ໂມດູນ", desc: "ກົນໄກໜ່ວຍຄວາມຈຳ, Concurrency & Network Sockets" }
    ],
    codeSnippet: `# 3-Day Advanced Python Course Curriculum
COURSE_SCHEDULE = {
    "Day_1": [
        "Module 01: Python in the Real World & Architecture",
        "Module 02: Advanced Object-Oriented Programming (OOP)"
    ],
    "Day_2": [
        "Module 03: Design with Iterator Protocol",
        "Module 04: Design with Generator & Memory Pipelines",
        "Module 05: Production Closures & Decorators",
        "Module 06: Python Lambda & Functional Tools"
    ],
    "Day_3": [
        "Module 07: Data & Memory Mechanics",
        "Module 08: Concurrency, Threading & AsyncIO",
        "Module 09: Network Programming & TCP Sockets"
    ]
}

print("Total: 3 Days | 9 Core Modules | 28 Hands-on VLABs")`,
    takeaways: "ເຂົ້າໃຈເສັ້ນທາງການພັດທະນາຊອບແວຕັ້ງແຕ່ໂຄງສ້າງລະບົບ, ການຄວບຄຸມ Memory ຈົນຮອດລະບົບ Network."
  },

  // ==========================================
  // ມື້ທີ 1: ໂມດູນ 01 - 02
  // ==========================================
  {
    id: "slide-01",
    day: "day1",
    dayLabel: "ມື້ທີ 1 (ຮຽນ 1 ຫາ 2)",
    number: "01",
    fileLabel: "module_01_architecture.py",
    title: "ໂມດູນ 01: Python ໃນໂລກການເຮັດວຽກຕົວຈິງ & ສະຖາປັດຕະຍະກຳ",
    subtitle: "Python ໃນໂລກຕົວຈິງ — ຈາກໂຄ້ດທີ່ແລ່ນໄດ້ ສູ່ລະບົບທີ່ໝັ້ນຄົງ ແລະ ຮອງຮັບການຂະຫຍາຍຕົວ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງການປ່ຽນຜ່ານຈາກການຂຽນສະຄຣິບທຳມະດາ ໄປສູ່ການອອກແບບສະຖາປັດຕະຍະກຳຊອບແວທີ່ຮອງຮັບການຂະຫຍາຍຕົວ ແລະ ມາດຕະຖານຄຸນນະພາບລະບົບ 6 ຫຼັກການ.",
    whatWasLearned: [
      "ສະຖາປັດຕະຍະກຳລະບົບແບບຫຼາຍຊັ້ນ (Layered Architecture): ແຍກສ່ວນ Transport (HTTP/API) → Service (ກົດເກນທຸລະກິດ) → Domain → Adapters (ຖານຂໍ້ມູນ / Cloud)",
      "ມາດຕະຖານຄຸນນະພາບຊອບແວ 6 ດ້ານ: Automated Testing, Structured Logging, Config Management, Security & Validation, Performance Profiling, Dependency Isolation",
      "ການອອກແບບ Error Boundaries: ກຳນົດຂອບເຂດຈັດການຂໍ້ຜິດພາດຢ່າງຖືກຕ້ອງ ບໍ່ໃຫ້ລະບົບລົ້ມທັງໝົດ ແລະ ບໍ່ປິດບັງຂໍ້ຜິດພາດດ້ວຍ bare except",
      "ການໃຊ້ Type Hints ສ້າງຂໍ້ຕົກລົງລະບົບ (Service Contracts) ທີ່ຊັດເຈນຕັ້ງແຕ່ກ່ອນ Runtime"
    ],
    realWorldUse: "ການອອກແບບ Backend Services, REST APIs, Microservices, ແລະ ລະບົບເຊື່ອມຕໍ່ຂໍ້ມູນລະຫວ່າງອົງກອນ",
    labs: [
      { code: "EXA-M01-1", name: "ກວດສອບຄວາມຮູ້ພື້ນຖານ", desc: "Quiz ກວດສອບຫຼັກການວິສະວະກຳ" },
      { code: "EXA-M01-2", name: "ສະພາບແວດລ້ອມ Python", desc: "ກວດສອບ Runtime Model ແລະ ສະພາບແວດລ້ອມ" }
    ],
    codeSnippet: `from dataclasses import dataclass
import logging

logger = logging.getLogger(__name__)

# Domain model with invariant validation
@dataclass(frozen=True)
class Order:
    order_id: str
    amount: float
    status: str

def process_order(order: Order) -> bool:
    """Service layer: executes business logic and logs events"""
    logger.info("Processing order: %s", order.order_id)
    if order.amount <= 0:
        raise ValueError("Order amount must be greater than zero.")
    return True`,
    takeaways: "ເຂົ້າໃຈວິທີສ້າງໂຄງສ້າງລະບົບທີ່ມີມາດຕະຖານລະດັບມືອາຊີບຕັ້ງແຕ່ເລີ່ມຕົ້ນ."
  },
  {
    id: "slide-02",
    day: "day1",
    dayLabel: "ມື້ທີ 1 (ຮຽນ 1 ຫາ 2)",
    number: "02",
    fileLabel: "module_02_oop.py",
    title: "ໂມດູນ 02: ການຂຽນໂປຣແກຣມແບບວັດຖຸຂັ້ນສູງ (OOP in Python)",
    subtitle: "ການຂຽນໂປຣແກຣມແບບວັດຖຸ — Dunder Protocols, ກົດລະບຽບ Invariants ແລະ ການປະກອບວັດຖຸ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງຫຼັກການອອກແບບ Class ຢ່າງມືອາຊີບ, Dunder Magic Methods, ການປົກປ້ອງຂໍ້ມູນດ້ວຍ Invariants ແລະ ຫຼັກການປະກອບວັດຖຸ (Composition over Inheritance).",
    whatWasLearned: [
      "Think in Objects: ອອກແບບ Class ໃຫ້ຮັກສາ Invariants (ກົດເກນທາງທຸລະກິດທີ່ຕ້ອງຖືກຕ້ອງສະເໝີ)",
      "Python Dunder Protocols: ການ implement ວິທີການພິເສດ (__init__, __repr__, __str__, __eq__, __hash__, __len__)",
      "Encapsulation ແບບ Pythonic: ໃຊ້ Private attributes (_var, __var) ແລະ @property / @setter ສຳລັບ Data Validation",
      "Composition over Inheritance: ຫຼຸດຜ່ອນການຜູກມັດໂຄ້ດແໜ້ນໜາ ແລະ ປ້ອງກັນບັນຫາ Fragile Base Class",
      "Polymorphism & Duck Typing: ຂຽນໂຄ້ດທີ່ຍືດຫຍຸ່ນໂດຍອີງຕາມພຶດຕິກຳ (Protocols) ແທນທີ່ຈະຜູກມັດກັບ Type"
    ],
    realWorldUse: "ການອອກແບບ Domain Models, ລະບົບບັນຊີທະນາຄານ (Account & Transactions), ແລະ Business Logic Engines ທີ່ຕ້ອງການຄວາມປອດໄພສູງ",
    labs: [
      { code: "EXA-M02-1", name: "ອອກແບບ Class ຕາມກົດລະບຽບ", desc: "ກຳນົດ Invariants ໃຫ້ກັບ Class" },
      { code: "EXA-M02-2", name: "ສ້າງ Encapsulation", desc: "ປົກປ້ອງຂໍ້ມູນບັນຊີທະນາຄານ" },
      { code: "EXA-M02-3", name: "Polymorphism ຕົວຈິງ", desc: "ປະຍຸກໃຊ້ກັບລະບົບຊຳລະເງິນ" }
    ],
    codeSnippet: `class BankAccount:
    """Encapsulates account state and enforces invariants"""
    def __init__(self, account_id: str, initial_balance: float = 0.0):
        self._account_id = account_id
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self._balance = initial_balance

    @property
    def balance(self) -> float:
        """Read-only balance property"""
        return self._balance

    def deposit(self, amount: float) -> None:
        """Enforces positive deposit invariant"""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self._balance += amount`,
    takeaways: "ສາມາດອອກແບບ Class ທີ່ມີຄວາມປອດໄພຂອງຂໍ້ມູນ ແລະ ຫຼຸດຜ່ອນຂໍ້ຜິດພາດທາງທຸລະກິດ."
  },

  // ==========================================
  // ມື້ທີ 2: ໂມດູນ 03 - 06
  // ==========================================
  {
    id: "slide-03",
    day: "day2",
    dayLabel: "ມື້ທີ 2 (ຮຽນ 3 ຫາ 6)",
    number: "03",
    fileLabel: "module_03_iterator.py",
    title: "ໂມດູນ 03: ການອອກແບບດ້ວຍ Iterator Protocol",
    subtitle: "ການອອກແບບດ້ວຍ Iterator — ການທ່ອງຂໍ້ມູນແບບສາຍທານທີ່ປະຢັດໜ່ວຍຄວາມຈຳສູງສຸດ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງກົນໄກພາຍໃນຂອງ Iterator Protocol, ຄວາມແຕກຕ່າງລະຫວ່າງ Iterable vs Iterator ແລະ ການປະມວນຜົນຂໍ້ມູນມະຫາສານໂດຍບໍ່ໃຫ້ Memory ເຕັມ.",
    whatWasLearned: [
      "ຄວາມແຕກຕ່າງລະຫວ່າງ Iterable (ວັດຖຸທີ່ວົນ Loop ໄດ້) ແລະ Iterator (ຕົວດຶງຂໍ້ມູນເທື່ອລະຄ່າຜ່ານ __next__)",
      "Iterator Protocol: ການ implement __iter__() ແລະ __next__() ພ້ອມທັງດັກຈັບ StopIteration",
      "Streaming Data Traversal: ອ່ານ ແລະ ປະມວນຜົນຂໍ້ມູນລະດັບຫຼາຍລ້ານແຖວ ໂດຍບໍ່ຕ້ອງດຶງເຂົ້າ RAM ພ້ອມກັນທັງໝົດ",
      "ຄວບຄຸມ Memory ໃຫ້ຄົງທີ່ O(1) Space Complexity ເມື່ອອ່ານໄຟລ໌ Log ຫຼື Database Cursor ຂະໜາດໃຫຍ່",
      "ການສ້າງ Custom Iterators ສຳລັບແກ້ໄຂບັນຫາ Pagination ແລະ Infinite Sequences"
    ],
    realWorldUse: "ການອ່ານໄຟລ໌ Log ລະດັບ Gigabytes, ການປະມວນຜົນ Stream ຂໍ້ມູນຈາກ IoT/Sensors, ແລະ ການດຶງຂໍ້ມູນ API ແບບ Paging",
    labs: [
      { code: "EXA-M03-1", name: "ສ້າງ Custom Iterator", desc: "implement __iter__ ແລະ __next__" },
      { code: "EXA-M03-2", name: "Streaming Big Data", desc: "ອ່ານໄຟລ໌ຂໍ້ມູນຂະໜາດໃຫຍ່ແບບ Stream" }
    ],
    codeSnippet: `class TransactionStream:
    """Custom Iterator: streams records one-by-one with O(1) memory"""
    def __init__(self, data_source):
        self.source = data_source
        self.cursor = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.cursor >= len(self.source):
            raise StopIteration
        item = self.source[self.cursor]
        self.cursor += 1
        return item`,
    takeaways: "ປ້ອງກັນບັນຫາ Out of Memory (RAM ເຕັມ) ເມື່ອເຮັດວຽກກັບຊຸດຂໍ້ມູນຂະໜາດໃຫຍ່."
  },
  {
    id: "slide-04",
    day: "day2",
    dayLabel: "ມື້ທີ 2 (ຮຽນ 3 ຫາ 6)",
    number: "04",
    fileLabel: "module_04_generator.py",
    title: "ໂມດູນ 04: ການອອກແບບດ້ວຍ Generator & ທໍ່ລຳລຽງຂໍ້ມູນ",
    subtitle: "ການອອກແບບດ້ວຍ Generator — ຄຳສັ່ງ Yield, ການປະມວນຜົນເມື່ອຮ້ອງຂໍ ແລະ ທໍ່ລຳລຽງຂໍ້ມູນ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງ Generator Functions ດ້ວຍຄຳສັ່ງ yield, ຫຼັກການ Lazy Evaluation (ຄຳນວນເມື່ອຕ້ອງການ) ແລະ ການຕໍ່ທໍ່ລຳລຽງຂໍ້ມູນ (Pipelines) ແບບຕໍ່ເນື່ອງ.",
    whatWasLearned: [
      "ຫຼັກການເຮັດວຽກຂອງ Generator Function ແລະ ການພັກ-ສືບຕໍ່ການເຮັດວຽກຜ່ານ yield expression",
      "Lazy Evaluation: ຜະລິດຄ່າອອກມາເທື່ອລະອັນເມື່ອມີການຮ້ອງຂໍເທົ່ານັ້ນ ບໍ່ສ້າງ List ໃຫຍ່ໄວ້ໃນ RAM",
      "Generator Pipelines: ການຕໍ່ທໍ່ປະມວນຜົນຂໍ້ມູນ (ອ່ານໄຟລ໌ → ແປງຂໍ້ມູນ → ກັ່ນຕອງ → ສົ່ງອອກ) ຄືກັບ Unix Pipes",
      "Generator Expressions: ຄວາມແຕກຕ່າງລະຫວ່າງ (x for x in data) ແລະ [x for x in data]",
      "ການຄວບຄຸມ Memory ໃຫ້ຄົງທີ່ O(1) ຕະຫຼອດການປະມວນຜົນຂໍ້ມູນລະດັບ Gigabytes"
    ],
    realWorldUse: "ການສ້າງ Data Pipeline / ETL (Extract, Transform, Load), ການປະມວນຜົນໄຟລ໌ CSV/JSON ຂະໜາດໃຫຍ່ຫຼາຍ Gigabytes",
    labs: [
      { code: "EXA-M04-1", name: "ສ້າງ Generator Pipeline", desc: "Lazy Evaluation & Data Filtering Pipeline" }
    ],
    codeSnippet: `def read_large_logs(file_path: str):
    """Generator: yields log lines lazily without buffering full file"""
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            if "ERROR" in line:
                yield line.strip()

# Composable memory-efficient pipeline (O(1) RAM):
# raw_logs = read_large_logs("server.log")
# parsed = (parse_log(line) for line in raw_logs)
# critical = (record for record in parsed if record["severity"] == "CRITICAL")`,
    takeaways: "ສ້າງ Data Pipeline ທີ່ໄວ ແລະ ໃຊ້ Memory ຕ່ຳທີ່ສຸດດ້ວຍຫຼັກການ Lazy Evaluation."
  },
  {
    id: "slide-05",
    day: "day2",
    dayLabel: "ມື້ທີ 2 (ຮຽນ 3 ຫາ 6)",
    number: "05",
    fileLabel: "module_05_decorator.py",
    title: "ໂມດູນ 05: Closure & Decorators ລະດັບໃຊ້ງານຈິງ",
    subtitle: "Closure & Decorator — ຟັງຊັນຂັ້ນສູງ, ການຈື່ຈຳຂອບເຂດຕົວປ່ຽນ ແລະ ຮູບແບບ Decorators",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງ First-Class Functions, Lexical Scope, Closure (Scope Capture) ແລະ ການສ້າງ Decorators ມາດຕະຖານສຳລັບວັດເວລາ, Logging, Auth ແລະ Retry.",
    whatWasLearned: [
      "First-Class Functions: Function ເປັນ Object ສາມາດສົ່ງເປັນ Argument ຫຼື Return ອອກມາໄດ້",
      "Lexical Scope & Closures: ວິທີທີ່ Function ພາຍໃນຈື່ຄ່າຕົວປ່ຽນຈາກ Outer Scope ເຖິງແມ່ນ Outer Function ຈະຈົບແລ້ວ",
      "Decorator Pattern: ການໃຊ້ @syntax ເພື່ອດັດແປງ ແລະ ເພີ່ມຄວາມສາມາດໃຫ້ Function ໂດຍບໍ່ແກ້ໄຂ Source Code ເດີມ",
      "ການນຳໃຊ້ @functools.wraps ເພື່ອຮັກສາ Metadata, Docstring ແລະ Signature ເດີມ",
      "Decorators ທີ່ໃຊ້ເລື້ອຍໆ: @timing (ວັດເວລາ), @logger (ບັນທຶກເຫດການ), @retry (ລອງໃໝ່ອັດຕະໂນມັດ), @require_auth (ກວດສອບສິດ)"
    ],
    realWorldUse: "ການສ້າງ Web Middleware, ລະບົບ Audit Trail, ລະບົບກວດສອບສິດ (RBAC), ແລະ ລະບົບ Caching / Rate Limiting",
    labs: [
      { code: "EXA-M05-1", name: "ສ້າງ Stateful Closure", desc: "Function ທີ່ຈື່ຈຳ State ຜ່ານ Closure" },
      { code: "EXA-M05-2", name: "ສ້າງ Production Decorators", desc: "Decorators ວັດເວລາ ແລະ ບັນທຶກ Log" }
    ],
    codeSnippet: `import functools
import time

def timing_decorator(func):
    """Production Decorator: measures latency and preserves metadata"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"[{func.__name__}] Execution latency: {elapsed:.4f}s")
        return result
    return wrapper

@timing_decorator
def query_database():
    time.sleep(0.1)
    return "Query executed successfully"`,
    takeaways: "ສາມາດຂຽນ Decorators ທີ່ສະອາດ, ໃຊ້ຊ້ຳໄດ້ ແລະ ຍົກລະດັບຄຸນນະພາບລະບົບ."
  },
  {
    id: "slide-06",
    day: "day2",
    dayLabel: "ມື້ທີ 2 (ຮຽນ 3 ຫາ 6)",
    number: "06",
    fileLabel: "module_06_functional.py",
    title: "ໂມດູນ 06: Python Lambda & ເຄື່ອງມື Functional Programming",
    subtitle: "Lambda & Functional Tools — ຟັງຊັນບໍ່ມີຊື່, ການແປງ-ຄັດກອງຂໍ້ມູນ ແລະ ຟັງຊັນບໍລິສຸດ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງການຂຽນໂຄ້ດແບບ Functional Programming, Anonymous Functions (Lambda), map/filter/reduce, ແລະ ຫຼັກການ Pure Functions ທີ່ບໍ່ມີ Side Effects.",
    whatWasLearned: [
      "Anonymous Functions (Lambda): Syntax \`lambda args: expr\` ພາຍໃຕ້ຫຼັກການ 'ຟັງຊັນສັ້ນ, ຈຸດປະສົງຊັດເຈນ'",
      "ຂໍ້ຄວນລະວັງ: ເມື່ອໃດຄວນໃຊ້ Lambda (Inline key functions) ແລະ ເມື່ອໃດຄວນໃຊ້ \`def\` ປົກກະຕິເພື່ອຄວາມອ່ານງ່າຍ",
      "ເຄື່ອງມື Functional ມາດຕະຖານ: map() (ແປງຄ່າ), filter() (ຄັດກອງຄ່າ), functools.reduce() (ສະສົມລວບລວມຄ່າ)",
      "Custom Sorting: ການໃຊ້ Lambda ຮ່ວມກັບ sorted(), min(), max() ໂດຍໃຊ້ Key parameter",
      "ຫຼັກການ Pure Functions ແລະ Immutability: Function ທີ່ໃຫ້ຜົນລັບເດີມສະເໝີ ແລະ ບໍ່ປ່ຽນແປງ State ພາຍນອກ"
    ],
    realWorldUse: "ການຂຽນ Data Transformation ໃນ Pandas, PySpark, ການຈັດຮຽງຂໍ້ມູນທີ່ຊັບຊ້ອນ ແລະ ການຂຽນ Clean Code ທີ່ Test ງ່າຍ",
    labs: [
      { code: "EXA-M06-1", name: "ຝຶກໃຊ້ Lambda & Tools", desc: "Data Transformation & Custom Key Sorting" }
    ],
    codeSnippet: `from functools import reduce

users = [
    {"name": "Alice", "balance": 150000.0, "active": True},
    {"name": "Bob", "balance": 40000.0, "active": False},
    {"name": "Charlie", "balance": 320000.0, "active": True}
]

# Filter active accounts and map balances
active_balances = list(map(lambda u: u["balance"], filter(lambda u: u["active"], users)))

# Aggregate total balance using reduce
total_sum = reduce(lambda acc, val: acc + val, active_balances, 0.0)
print(f"Total active balance: \\${total_sum:,.2f}")`,
    takeaways: "ຂຽນໂຄ້ດປະມວນຜົນຂໍ້ມູນທີ່ກະທັດຮັດ, ຊັດເຈນ, ແລະ ຫຼຸດຜ່ອນ Side Effects."
  },

  // ==========================================
  // ວັນສຸດທ້າຍ: ໂມດູນ 07 - 09
  // ==========================================
  {
    id: "slide-07",
    day: "day3",
    dayLabel: "ວັນສຸດທ້າຍ (ຮຽນ 7 ຫາ 9)",
    number: "07",
    fileLabel: "module_07_memory.py",
    title: "ໂມດູນ 07: ໂຄງສ້າງໜ່ວຍຄວາມຈຳ & ກົນໄກການຈັດການຂໍ້ມູນ",
    subtitle: "ກົນໄກໜ່ວຍຄວາມຈຳ ແລະ ຂໍ້ມູນ — ການອ້າງອີງວັດຖຸ, ຄວາມປ່ຽນແປງໄດ້ ແລະ ທໍ່ລຳລຽງຂໍ້ມູນ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງໂຄງສ້າງ Memory ພາຍໃນຂອງ Python, Object References, Mutability, Garbage Collection, ພ້ອມທັງ Data Pipelines ເຊື່ອມຕໍ່ Excel, SQL ແລະ JSON.",
    whatWasLearned: [
      "ໂຄງສ້າງໜ່ວຍຄວາມຈຳ Python: ຄວາມເຂົ້າໃຈກ່ຽວກັບ Object References, Memory Addresses ແລະ 'Everything is an Object'",
      "Identity vs Equality: ຄວາມຕ່າງລະຫວ່າງ \`is\` (ກວດ Memory Address) ແລະ \`==\` (ກວດຄ່າ Value)",
      "Mutable vs Immutable: ພຶດຕິກຳຂອງ List, Dict, Set ທຽບກັບ Tuple, Str, Int ເມື່ອຖືກສົ່ງເຂົ້າ Function",
      "Shallow Copy vs Deep Copy: ການໃຊ້ copy.copy() ແລະ copy.deepcopy() ເພື່ອປ້ອງກັນ Unexpected Mutation",
      "Garbage Collection & Reference Counting, ການໃຊ້ __slots__ ເພື່ອຫຼຸດຜ່ອນ Memory ຂອງ Class Instances",
      "Data Pipelines: ການອ່ານ ແລະ ແປງຂໍ້ມູນລະຫວ່າງ Excel, SQL Databases, ແລະ JSON Streaming"
    ],
    realWorldUse: "ການອອກແບບລະບົບປະມວນຜົນຂໍ້ມູນຄວາມໄວສູງ, ການຫຼຸດຜ່ອນ Memory Footprint ໃນ Cloud Servers ແລະ Data Integration",
    labs: [
      { code: "EXA-M07-1", name: "ໂຄງສ້າງ Data Containers", desc: "ທົດລອງປະສິດທິພາບຂອງ Containers" },
      { code: "EXA-M07-2", name: "ການ Clean & Validate ຂໍ້ມູນ", desc: "Data Preparation & Normalization" },
      { code: "EXA-M07-3", name: "Excel & SQL Pipeline", desc: "ເຊື່ອມຕໍ່ ແລະ ດຶງຂໍ້ມູນຈາກ Excel & SQL" },
      { code: "EXA-M07-4", name: "JSON Data Pipeline", desc: "ປະມວນຜົນ Nested JSON ຄວາມໄວສູງ" }
    ],
    codeSnippet: `import copy

class OptimizedPoint:
    # __slots__ eliminates instance __dict__, saving significant RAM
    __slots__ = ("x", "y")
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

# Deep copy prevents unexpected mutation across shared references
original_records = [{"id": 101, "items": ["A", "B"]}]
safe_clone = copy.deepcopy(original_records)
safe_clone[0]["items"].append("C")

# original_records remains unchanged
assert len(original_records[0]["items"]) == 2`,
    takeaways: "ເຂົ້າໃຈລຶກເຊິ່ງເຖິງກົນໄກ Memory ພາຍໃນ Python ເພື່ອປ້ອງກັນ Memory Leak ແລະ ຂຽນລະບົບ ETL ທີ່ປອດໄພ."
  },
  {
    id: "slide-08",
    day: "day3",
    dayLabel: "ວັນສຸດທ້າຍ (ຮຽນ 7 ຫາ 9)",
    number: "08",
    fileLabel: "module_08_concurrency.py",
    title: "ໂມດູນ 08: ການປະມວນຜົນພ້ອມກັນ (Concurrency, Threading & AsyncIO)",
    subtitle: "ການເຮັດວຽກພ້ອມກັນ — Multi-threading, GIL, ການປ້ອງກັນຂໍ້ມູນຕຳກັນ ແລະ AsyncIO",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງການຈັດການ Concurrency vs Parallelism, ການແກ້ໄຂບັນຫາ I/O-bound vs CPU-bound, Threading, Race Conditions, Locks, ແລະ AsyncIO Event Loop.",
    whatWasLearned: [
      "Concurrency (ສະຫຼັບເຮັດຫຼາຍວຽກ) vs Parallelism (ແລ່ນຫຼາຍວຽກພ້ອມກັນແທ້ເທິງຫຼາຍ CPU Cores)",
      "I/O-Bound vs CPU-Bound: ການເລືອກໃຊ້ Threading vs Multiprocessing vs AsyncIO ໃຫ້ຖືກກັບລັກສະນະວຽກ",
      "Python GIL (Global Interpreter Lock): ຜົນກະທົບຕໍ່ Multi-threading ແລະ ວິທີກ້າວຂ້າມຜ່ານ Multiprocessing",
      "Thread Lifecycle & States: Daemon Threads, Worker Pool Patterns, ແລະ Thread Coordination",
      "Race Conditions & Critical Sections: ວິທີປົກປ້ອງ Shared State ດ້ວຍ threading.Lock() ແລະ Mutex",
      "AsyncIO Event Loop: ການຂຽນ Coroutine ດ້ວຍ async/await ແລະ ການລໍຖ້າຫຼາຍ Tasks ດ້ວຍ asyncio.gather()"
    ],
    realWorldUse: "ລະບົບ Web Crawling / API Scraping, High-Throughput Notification Dispatchers, ລະບົບປະມວນຜົນພາບ/ສຽງ, ແລະ Async Web Servers",
    labs: [
      { code: "EXA-M08-1", name: "ສ້າງ ແລະ ຄວບຄຸມ Threads", desc: "Coordinate Tasks & Run Threads" },
      { code: "EXA-M08-2", name: "ຈັດການ Thread Lifecycle", desc: "Daemon Threads & Worker States" },
      { code: "EXA-M08-3", name: "ປ້ອງກັນ Race Conditions", desc: "ລັອກ Shared State ດ້ວຍ threading.Lock" },
      { code: "EXA-M08-4", name: "Concurrency ໃນວຽກຕົວຈິງ", desc: "ດຶງຂໍ້ມູນຈາກຫຼາຍ APIs ພ້ອມກັນ" }
    ],
    codeSnippet: `import threading

counter = 0
lock = threading.Lock()  # Mutex protects shared state

def safe_increment():
    global counter
    for _ in range(10000):
        with lock:  # Protects critical section
            counter += 1

# Launch 5 concurrent worker threads
threads = [threading.Thread(target=safe_increment) for _ in range(5)]
for t in threads: t.start()
for t in threads: t.join()

print(f"Final thread-safe count: {counter}")`,
    takeaways: "ສາມາດຄວບຄຸມການເຮັດວຽກພ້ອມກັນໄດ້ຢ່າງຖືກຕ້ອງ, ປ້ອງກັນ Data Collision, ແລະ ເພີ່ມຄວາມໄວໃຫ້ລະບົບ."
  },
  {
    id: "slide-09",
    day: "day3",
    dayLabel: "ວັນສຸດທ້າຍ (ຮຽນ 7 ຫາ 9)",
    number: "09",
    fileLabel: "module_09_sockets.py",
    title: "ໂມດູນ 09: ການຂຽນໂປຣແກຣມເຄືອຂ່າຍ & Network Sockets",
    subtitle: "ການຂຽນໂປຣແກຣມເຄືອຂ່າຍ — TCP Sockets, ການເຊື່ອມຕໍ່ REST API, ການສົ່ງຂໍ້ມູນ ແລະ ຄວາມໝັ້ນຄົງ",
    overview: "ຫົວຂໍ້ນີ້ເວົ້າເຖິງ Low-level Socket Programming (TCP/UDP), ການສ້າງ Client-Server Architecture, HTTP Protocol Mechanics, REST APIs, ແລະ Network Reliability.",
    whatWasLearned: [
      "Low-level Networking ດ້ວຍ Python Sockets: TCP 3-Way Handshake, socket.bind(), listen(), accept(), connect(), send(), recv()",
      "Client-Server Architecture: ການສ້າງ Multi-client Socket Server (ລະບົບ Chat ແລະ Real-time messaging)",
      "HTTP Protocol Deep Dive: Request/Response Headers, Status Codes (2xx, 4xx, 5xx), ແລະ Payload",
      "RESTful API Integration: ການສ້າງ ແລະ ເຊື່ອມຕໍ່ API Clients ດ້ວຍ requests / httpx",
      "Streaming Data over HTTP: ການອ່ານ ແລະ ສົ່ງ CSV/JSON Data ແບບ Chunked Streaming",
      "Network Reliability Patterns: Connection Timeouts, Exponential Backoff Retries, Circuit Breakers, ແລະ ການຈັດການ Disconnect"
    ],
    realWorldUse: "ການພັດທະນາ Chat Servers, Custom Network Protocols, Microservice Communication, ແລະ Robust Third-party API Clients",
    labs: [
      { code: "EXA-M09-1", name: "ລະບົບ Socket Chat", desc: "ສ້າງ Multi-client TCP Socket Chat" },
      { code: "EXA-M09-2", name: "REST API Client Integration", desc: "ເຊື່ອມຕໍ່ API Endpoint ມາດຕະຖານ" },
      { code: "EXA-M09-3", name: "HTTP Streaming CSV Data", desc: "ດຶງຂໍ້ມູນ Streaming Data ຜ່ານ HTTP" },
      { code: "EXA-M09-4", name: "Network Reliability & Retries", desc: "Timeouts, Retries & Exponential Backoff" }
    ],
    codeSnippet: `import socket
import time

def resilient_connect(host: str, port: int, max_retries: int = 3):
    """Connects TCP socket with timeout and exponential backoff retry"""
    for attempt in range(1, max_retries + 1):
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(5.0)  # Prevents hanging connections
            s.connect((host, port))
            return s
        except (socket.timeout, ConnectionRefusedError) as err:
            wait_time = 2 ** attempt  # Exponential backoff (2s, 4s, 8s)
            print(f"Connection failed ({err}), retrying in {wait_time}s...")
            time.sleep(wait_time)
    raise ConnectionError("Exceeded maximum connection attempts.")`,
    takeaways: "ເຂົ້າໃຈລະບົບເຄືອຂ່າຍຕັ້ງແຕ່ລະດັບ Socket ຈົນຮອດ REST API ພ້ອມທັງວິທີຮັບມືກັບ Network Failure."
  }
];

// ==========================================
// ຕົວຈັດການສະໄລ້ (Slide Presentation Engine)
// ==========================================

let currentSlideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderSlide(0);
  setupEvents();
  initTheme();
});

function renderSlide(index) {
  if (index < 0) index = 0;
  if (index >= SLIDES_DATA.length) index = SLIDES_DATA.length - 1;
  currentSlideIndex = index;

  const s = SLIDES_DATA[currentSlideIndex];
  const total = SLIDES_DATA.length;
  const progressPct = ((currentSlideIndex + 1) / total) * 100;

  // ອັບເດດ Header / ປຸ່ມເລືອກມື້
  updateDayFilterButtons();

  const container = document.getElementById("slideStageContainer");
  if (!container) return;

  container.innerHTML = `
    <article class="presentation-canvas" id="activeSlideCard">
      <!-- ຫົວຂໍ້ດ້ານເທິງຂອງສະໄລ້ -->
      <div class="slide-header-bar">
        <div class="slide-badge-row">
          <span class="slide-day-badge ${getDayClass(s.day)}">
            <i data-lucide="calendar"></i> ${s.dayLabel}
          </span>
          <span class="slide-module-number">
            ${s.number === "ພາບລວມ" ? "ພາບລວມຫຼັກສູດ 3 ວັນ" : `ໂມດູນ ${s.number}`}
          </span>
        </div>

        <h1 class="slide-title-primary">${s.title}</h1>
        <p class="slide-subtitle-desc">${s.subtitle}</p>
      </div>

      <!-- ເນື້ອໃນຫຼັກຂອງສະໄລ້ (ແບ່ງ 2 ຖັນ) -->
      <div class="slide-split-body">
        
        <!-- ຖັນຊ້າຍ: ລາຍລະອຽດເນື້ອໃນ -->
        <div class="slide-info-column">
          <!-- ກ່ອງສະຫຼຸບຫົວຂໍ້ -->
          <div class="slide-callout-box">
            <div class="callout-label">
              <i data-lucide="sparkles"></i>
              <span>ຫົວຂໍ້ນີ້ເວົ້າເຖິງຫຍັງ?</span>
            </div>
            <p class="callout-text">${s.overview}</p>
          </div>

          <!-- ລາຍການເນື້ອໃນທີ່ໄດ້ຮຽນ -->
          <div class="slide-learning-section">
            <h3 class="section-title">
              <i data-lucide="check-circle-2"></i>
              <span>ເນື້ອໃນຫຼັກທີ່ໄດ້ຮຽນຮູ້ຢ່າງເລິກເຊິ່ງ:</span>
            </h3>
            <ul class="learning-list">
              ${s.whatWasLearned.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>

          <!-- ການນຳໃຊ້ຕົວຈິງ -->
          <div class="slide-usage-section">
            <h4 class="usage-title">
              <i data-lucide="briefcase"></i>
              <span>ການນຳໃຊ້ໃນໂລກການເຮັດວຽກຕົວຈິງ:</span>
            </h4>
            <p class="usage-text">${s.realWorldUse}</p>
          </div>

          <!-- ຫ້ອງທົດລອງ VLAB -->
          <div class="slide-labs-section">
            <div class="labs-header">
              <span><i data-lucide="terminal"></i> ຫ້ອງທົດລອງພາກປະຕິບັດ:</span>
              <span class="labs-count-badge">${s.labs.length} ຫ້ອງທົດລອງ</span>
            </div>
            <div class="labs-grid-chips">
              ${s.labs.map(lab => `
                <div class="lab-pill-chip" title="${lab.desc}">
                  <strong>[${lab.code}]</strong> ${lab.name}
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- ຖັນຂວາ: ຕົວຢ່າງໂຄ້ດ (ພາສາອັງກິດ) & ສິ່ງທີ່ໄດ້ຮັບ -->
        <div class="slide-code-column">
          
          <!-- ກ່ອງໂຄ້ດ (English Code Terminal) -->
          <div class="code-terminal-card">
            <div class="code-header-bar">
              <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="terminal-file-label">
                <i data-lucide="file-code"></i> ${s.fileLabel}
              </span>
              <button type="button" class="btn-copy-code" onclick="copyCodeSnippet(this)" title="ຄັດລອກໂຄ້ດ">
                <i data-lucide="copy"></i>
                <span>ຄັດລອກໂຄ້ດ</span>
              </button>
            </div>
            <pre class="terminal-code-body"><code>${escapeHtml(s.codeSnippet)}</code></pre>
          </div>

          <!-- ກ່ອງສິ່ງສຳຄັນທີ່ໄດ້ຮັບ -->
          <div class="takeaway-callout-card">
            <div class="takeaway-icon-badge">
              <i data-lucide="award"></i>
            </div>
            <div class="takeaway-content">
              <h4>ສິ່ງສຳຄັນທີ່ໄດ້ຮັບຈາກບົດຮຽນ:</h4>
              <p>${s.takeaways}</p>
            </div>
          </div>

        </div>

      </div>
    </article>
  `;

  // ອັບເດດແຖບຄວບຄຸມດ້ານລຸ່ມ
  const counterEl = document.getElementById("slideCounterText");
  if (counterEl) {
    counterEl.textContent = `ສະໄລ້ ${currentSlideIndex + 1} ຈາກທັງໝົດ ${total}`;
  }

  const progressEl = document.getElementById("slideProgressBar");
  if (progressEl) {
    progressEl.style.width = `${progressPct}%`;
  }
  
  const prevBtn = document.getElementById("btnPrevSlide");
  const nextBtn = document.getElementById("btnNextSlide");
  if (prevBtn) {
    prevBtn.disabled = currentSlideIndex === 0;
  }
  if (nextBtn) {
    if (currentSlideIndex === total - 1) {
      nextBtn.innerHTML = `<span>ສິ້ນສຸດສະໄລ້</span> <i data-lucide="check"></i>`;
      nextBtn.disabled = true;
    } else {
      nextBtn.innerHTML = `<span>ສະໄລ້ຖັດໄປ</span> <i data-lucide="chevron-right"></i>`;
      nextBtn.disabled = false;
    }
  }

  renderThumbnails();

  if (window.lucide) lucide.createIcons();
}

function getDayClass(day) {
  if (day === "day1") return "badge-day-1";
  if (day === "day2") return "badge-day-2";
  if (day === "day3") return "badge-day-3";
  return "badge-day-all";
}

function updateDayFilterButtons() {
  const current = SLIDES_DATA[currentSlideIndex];
  const btns = document.querySelectorAll(".day-filter-btn");
  btns.forEach(btn => {
    const day = btn.getAttribute("data-day");
    if (day === current.day || (day === "all" && currentSlideIndex === 0)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function renderThumbnails() {
  const strip = document.getElementById("slideThumbStrip");
  if (!strip) return;

  strip.innerHTML = SLIDES_DATA.map((s, idx) => `
    <button type="button" class="thumb-pill-btn ${idx === currentSlideIndex ? 'active' : ''}" onclick="goToSlide(${idx})" title="${s.title}">
      ${idx === 0 ? "📋 ພາບລວມ 3 ວັນ" : `ໂມດູນ ${s.number}`}
    </button>
  `).join("");

  // ເລື່ອນ Thumbnail ທີ່ Active ມາຢູ່ກາງ
  const activeThumb = strip.querySelector(".thumb-pill-btn.active");
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

window.goToSlide = function(index) {
  renderSlide(index);
};

window.jumpToDay = function(dayKey) {
  if (dayKey === "all") {
    goToSlide(0);
  } else if (dayKey === "day1") {
    goToSlide(1); // Module 01
  } else if (dayKey === "day2") {
    goToSlide(3); // Module 03
  } else if (dayKey === "day3") {
    goToSlide(7); // Module 07
  }
};

window.copyCodeSnippet = function(buttonEl) {
  const code = SLIDES_DATA[currentSlideIndex].codeSnippet;
  navigator.clipboard.writeText(code).then(() => {
    buttonEl.innerHTML = `<i data-lucide="check"></i> <span>ຄັດລອກແລ້ວ!</span>`;
    if (window.lucide) lucide.createIcons();
    setTimeout(() => {
      buttonEl.innerHTML = `<i data-lucide="copy"></i> <span>ຄັດລອກໂຄ້ດ</span>`;
      if (window.lucide) lucide.createIcons();
    }, 2000);
  });
};

window.toggleFullscreen = function() {
  const stage = document.getElementById("presentationShell");
  if (!stage) return;

  if (!document.fullscreenElement) {
    stage.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
};

function setupEvents() {
  // ປຸ່ມສະໄລ້ກ່ອນໜ້າ / ຖັດໄປ
  const prevBtn = document.getElementById("btnPrevSlide");
  const nextBtn = document.getElementById("btnNextSlide");
  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentSlideIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentSlideIndex + 1));

  // ປຸ່ມເລືອກມື້
  const dayBtns = document.querySelectorAll(".day-filter-btn");
  dayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");
      jumpToDay(day);
    });
  });

  // ປຸ່ມເຕັມຈໍ
  const fullBtn = document.getElementById("btnFullscreen");
  if (fullBtn) fullBtn.addEventListener("click", toggleFullscreen);

  // ຟັງ event ການປ່ຽນ Fullscreen
  document.addEventListener("fullscreenchange", () => {
    const fullBtn = document.getElementById("btnFullscreen");
    if (fullBtn) {
      if (document.fullscreenElement) {
        fullBtn.innerHTML = `<i data-lucide="minimize"></i> <span>ອອກຈາກເຕັມຈໍ</span>`;
      } else {
        fullBtn.innerHTML = `<i data-lucide="maximize"></i> <span>ເຕັມຈໍ</span>`;
      }
      if (window.lucide) lucide.createIcons();
    }
  });

  // ປຸ່ມພິມ
  const printBtn = document.getElementById("btnPrintSlides");
  if (printBtn) printBtn.addEventListener("click", () => window.print());

  // ປຸ່ມສະຫຼັບໂໝດມືດ/ແຈ້ງ
  const themeBtn = document.getElementById("btnThemeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // ຄີບອດຄວບຄຸມສະໄລ້
  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      goToSlide(currentSlideIndex + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goToSlide(currentSlideIndex - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToSlide(SLIDES_DATA.length - 1);
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function initTheme() {
  const saved = localStorage.getItem("slides_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("slides_theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
    if (window.lucide) lucide.createIcons();
  }
}
