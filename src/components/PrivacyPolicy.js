import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="privacy-content" style={{ 
      maxWidth: '1200px', 
      margin: '80px auto 0',
      padding: '2rem',
      lineHeight: '1.6',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2c3e50', fontSize: '2.5rem' }}>Общи условия</h1>
      
      <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', borderLeft: '4px solid #00966e' }}>
        <p>Уважаеми потребители и гости,</p>
        <p>С използването на услугите на "Христов2023" ЕООД (продавачът, търговецът) Вие се съгласявате с клаузите на настоящите общи условия (условията), които стават неразделна част от всяка сделка, сключена от Ваша страна с помощта на онлайн магазина ни.</p>
        <p>Молим да се запознаете със съдържанието на условията. Приемането на Общите условия е задължителна предпоставка за използването на услугите на доставчика и закупуване на артикули от него.</p>
        <p style={{ marginBottom: '0' }}>Общите условия са приложими винаги, независимо от браузъра или устройството, от което са достъпни услугите.</p>
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>1. Предмет</h2>
        <p>1.1. Общите условия уреждат взаимоотношенията между "Христов2023" ЕООД, в качеството му на ПРОДАВАЧ от една страна и ПОТРЕБИТЕЛИТЕ, които използват уебсайта, където се намира онлайн магазина на Продавача.</p>
        <p>1.2. Продавачът предоставя техническа и софтуерна поддръжка за уебсайта, лично или чрез друг/и лица, които са специализирани.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>2. Данни за продавача</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
          <li>Име "Христов2023" ЕООД</li>
          <li>ЕИК 207223611</li>
          <li>Седалище и адрес на управление Област: София (столица), Община: Столична, Населено място: с. Казичене, п.к. 1532 бул./ул. "Цар Борис III" № 134</li>
          <li>Адрес за кореспонденция Област: София (столица), Община: Столична Населено място: с. Казичене, п.к. 1532 бул./ул. "Цар Борис III" № 134</li>
          <li>Телефон за контакт: 0885339138</li>
          <li>Имейл: etnobroderybg@gmail.com</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>3. Дефиниции</h2>
        <p>3.1 „Потребители" по смисъла на Закона за защита на потребителите(ЗЗП), са физическите лица, които придобиват стоки или ползва услуги, които не са предназначени за извършване на търговска или професионална дейност или което като страна по договор по този закон действа извън рамките на своята търговска или професионална дейност.</p>
        <p>3.2 „Продавач" е „Христов2023" ЕООД, след като между него и клиента бъде сключен договор за покупко-продажба на артикул по предвидения в общите условия и българското законодателство начин.</p>
        <p>3.3 „Онлайн магазин" е уебсайта, поддържан от продавача или трети лица, на които той е възложил това, където са посочени по определени критерии всички стоки, предлагани от продавача.</p>
        <p>3.4 „Акаунт", „Профил" представлява раздел в Сайта, формиран от имейл адрес, парола и лични данни на потребител или клиент търговец, който им позволява да използват услугите на Сайта, в случаи, в които за използването им се изисква акаунт и/ или да разглеждат свои поръчки.</p>
        <p>3.5 „Стока/артикул" е всяка движима вещ, която е предложена за покупка в онлайн магазина и която потребителят може да добави в кошницата си и да закупи срещу посочената цена.</p>
        <p>3.6 „Купувач" е всеки потребител, чиято поръчка е била потвърдена от Продавача и който има да право да получи избраната стока срещу задължение да заплати цената й.</p>
        <p>3.7 „Договор", „Договор от разстояние", „Поръчка", обхваща всички случаи, при които се сключва договор между „Христов2023" ЕООД и клиент чрез един или няколко от следните методи: а) поръчка чрез интернет (сайт, електронна поща, социални мрежи); б) поръчка по телефон; в) поръчка чрез сайта.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>4. Общи положения</h2>
        <p>4.1 Продавачът си запазва правото да прави промени в Общите условия, които не засягат негови основни задължения за изпълнение и не биха представлявали сключване на нов договор. Промените ще съставляват част от настоящите Условия само след като потребителите бъдат уведомени своевременно. Уведомяването ще става посредством изпращане на известие за промени в Условията, в което ще се съдържат и обстоятелствата, при които те ще се считат за приети от потребителите в съответствие с приложимото законодателство.</p>
        <p>4.2 Промените в условията, които касаят изискванията към профилите на онлайн потребителите, влизат в сила веднага след уведомяването и се прилагат за всички.</p>
        <p>4.3 Промените, свързани с условията по договора за покупко-продажба, включително, но не само цена, условия за потвърждаване на поръчката, изпълнение на заявката, влизат в сила след уведомяването и се прилагат само за поръчките, които са направени след датата на влизането им в сила. Направените и потвърдени поръчки се изпълняват съгласно общите условия действали към момента на потвърждаване на поръчката.</p>
        <p>4.4 Промяната на характеристиките на стоките може да се прави едностранно от продавача, като това се посочва в описанието на стоката на уебсайта.</p>
        <p>4.5 Ако купувачът е направил поръчка за стока с други характеристики, която е изчерпана, Продавачът може да му предложи стоката с изменени характеристики, в който случай купувачът избира дали да приеме направеното предложение. В случай, че не е съгласен, той има право на отказ от договора.</p>
        <p>4.6 Не се допускат обидни коментари, както и коментари, които призовават към насилие или извършване на престъпление или административно нарушение, както и коментари, които съдържат личностни атаки.</p>
        <p>4.7 Недействителността на една или няколко от клаузите в настоящите общи условия няма за последица недействителност на останалите клаузи или на условията в тяхната цялост в съответствие с разпоредбата на чл. 26, ал. 4 от Закона за задълженията и договорите.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>5. Условия за използване на услугите и изисквания към потребителя</h2>
        <p>5.1 Достъпът до Сайта с цел регистрация на поръчка или регистрация на профил е позволен за всяко лице, което го посещава. Регистрацията като потребител в Сайта е по желание на посетителя.</p>
        <p>5.2 Онлайн потребителят е длъжен да предостави цялата поискана информация при регистрация. Тя трябва да е точна,verickна и пълна. При промяна в някое от обстоятелствата, потребителят е длъжен своевременно да го обнови.</p>
        <p>5.3 Продавачът не носи никаква отговорност от евентуално настъпили вреди, вследствие на неправилно въведена или необновена потребителска информация.</p>
        <p>5.4 Онлайн потребителят, който вече се е регистрирал, е длъжен да пази данните на акаунта си и да не ги споделя с трети страни.</p>
        <p>5.5 Онлайн потребителят има право да деактивира или изтрие профила си. Той не може да упражни това свое право в случай, че има неизпълнени задължения по активни поръчки.</p>
        <p>5.6 Продавачът може да изтрие профила Ви, в случай, че той не е бил използван повече от 60 (шестдесет) последователни месеца. Акаунтът може да бъде изтрит, в случай, че потребителят извършва забранени от условията действия, престъпни или други противоправни действия. Преди да бъде изтрит профила, ще бъде изпратено съобщение по имейл, СМС или друг посочен от Вас начин в срок от 30 (тридесет) дни преди изтриването. Влизането в акаунта преди изтичането на този срок и изпълнението на конкретните указания в имейла или съобщението ще преустанови процеса по изтриването.</p>
        <p>5.7 Изтриването на акаунт не е пречка да се създаде нов.</p>
        <p>5.8 Всеки потребител има право само на един акаунт. Това ограничение не се отнася за изтрити акаунти. Допустимо е онлайн потребителят да има личен акаунт и акаунт, в който действа в търговско качество и/или от името на юридическо лице.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>6. Правила за използване на услугите и забранено поведение</h2>
        <p>6.1 Онлайн потребителите използват уебсайта, за да сключват сделки от свое име, а не от името на трети лица. Това се отнася и за представителите на юридическите лица, които сключват сделките през профила на юридическото лице, а не за своя или нечия друга сметка.</p>
        <p>6.2 Всеки онлайн потребител носи отговорност за неправомерните действия на трети лица, които са ползвали акаунта му с негово знание, позволение или са били улеснени от него.</p>
        <p>6.3 Онлайн потребителят не носи отговорност за действията, извършени от лица, които са осъществили неправомерен достъп до акаунта му. В този случай той има право да поиска съдействие от продавача за възстановяване на профила и за отказ на направените от негово име поръчки.</p>
        <p>6.4 Онлайн потребителите не могат да извършват действия, с които:</p>
        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', marginLeft: '2rem' }}>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>засягат или нарушават правата на друго лице, включително правата върху интелектуалната собственост;</li>
            <li>нарушават някое от тези Общи условия или приложимото законодателство;</li>
            <li>заобикалят или се опитват да заобиколят някое от настоящите Условия;</li>
            <li>представляват неразрешена или непоискана реклама, или нежелана или спам електронна поща;</li>
            <li>събират лични данни от други потребители или да използват такава информация, събрана от продавача;</li>
            <li>участват в каквото и да било поведение, което има вероятност да причини пробив в сигурността на акаунта;</li>
            <li>получават парола, акаунт на друг онлайн потребител или друга информация за сигурност;</li>
            <li>използват идентификационни данни на трета страна, скриват истинския си IP адрес или по друг начин се представят за друг, или представят погрешно самоличността си или принадлежността си към юридическо лице;</li>
            <li>нарушават или пречат на правилното функциониране или сигурността на някоя компютърна мрежа;</li>
            <li>стартират каквато и да било форма на автоматичен отговор или "спам" в онлайн магазина, какъвто и да било процес, който работи или се активира, докато не са в него, или какъвто и да било процес, който по друг начин пречи на правилното функциониране на уебсайта (включително при поставяне на неразумно натоварване върху инфраструктурата на уебсайта чрез претоварване, "наводняване", "бомбардиране по пощата" или причиняване на срив на системата);</li>
            <li>потенциално да навредят на уебсайта по какъвто и да е начин, включително, но не само, с нарушаване на каквито и да било характеристики за сигурност на уебсайта, използване на ръчен или автоматизиран софтуер или други средства за осъществяване на достъп до, "обхождане", "обработване" или "разглеждане с индексиращ робот" на някоя страница, данни или част от уебсайта, или във връзка с тях, или вкарването на вируси, червеи или подобен вреден код в уебсайта;</li>
            <li>копират или съхраняват значителна част от съдържанието на уебсайта, дори по отношение на направени от тях поръчки, без писмено съгласие от доставчика на услугата;</li>
            <li>декомпилират, правят обратно инженерство или получават по друг начин изходния код или основните идеи, или информация за уебсайта или свързана с тях;</li>
            <li>злоупотребяват с каквито и да било промоции, отстъпки или други предимства, предлагани от нас, или манипулират цената на които и да било изброени продукти, или се намесват в описанията на продуктите; или</li>
            <li>се опитват да правят каквото и да било, или позволяват, насърчават, подпомагат или позволяват на трети страни да правят каквото и да било забранено в този списък.</li>
          </ol>
        </div>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>7. Извършване на покупки. Доставка. Плащане. Отговорност. Носене на риска. Други условия.</h2>
        <p>7.1 Потребителят и продавачът сключват договор за покупко-продажба от разстояние на стоките, посочени в онлайн магазина.</p>
        <p>7.2 Предложението за сключване на договора се отправя от клиента, който маркира желания от него продукт и го добавя в кошницата си, след което потвърждава избора си в съответствие с функционалностите на онлайн магазина.</p>
        <p>7.3 Поръчката се прави от онлайн потребителя, чрез добавяне на определен/и артикули в кошницата и потвърждаването на този избор. Клиентът избира броя на артикулите и други техни характеристики (например, но не само, размер, дължина, цвят и т.н.)</p>
        <p>7.4 След потвърждаването на поръчката от потребителя заявката се изпраща автоматично на Продавача, който уведомява клиента за това дали търсените артикули са в наличност и дали е одобрил заявката.</p>
        <p>7.5 Заявки могат да се правят от клиентите денонощно на уебсайта или по телефон от 9.00 ч. до 17.30 ч.</p>
        <p>7.6 При заявка по телефон клиентът трябва да посочи за кой/кои артикули прави поръчка, като опише устно техните съществени характеристики (вид на артикула, размер, цена, брой). След това поръчката се предава на Продавача, за да се установи дали артикулите са налични и се изпраща информация за потвърждаване или отказ на поръчката.</p>
        <p>7.7 Договорът се счита сключен след потвърждение на направената поръчка от страна на продавача, чрез изпращане на имейл и издаване на електронен документ.</p>
        <p>7.8 Продавачът носи отговорност за съответствието на продукта с описанието му в уебсайта.</p>
        <p>7.9 Купувачът е длъжен да се запознае с пълното публикувано описание на стоката.</p>
        <p>7.10 Продавачът не отговаря, ако купувачът има възражения по характеристики на стоката, които са били описани на сайта.</p>
        <p>7.11. Доставката се осъществява само със СПИДИ/SPEEDY и е за сметка на купувача.</p>
        <p style={{ marginLeft: '2rem' }}>7.11.1 Цената на доставката на територията на Република България се определя от тарифата на избрания от клиента спедитор/ превозвач.</p>
        <p style={{ marginLeft: '2rem' }}>7.11.2 Цените за доставка за локации извън територията на Република България се определят съгласно тарифата на избрания от клиента спедитор/ превозвач в съответствие със зоната, в която попада държавата, където се намира местоназначението.</p>
        <p style={{ marginLeft: '2rem' }}>7.11.3 Доставката се осъществява до 7 работни дни. Този срок може да бъде удължен с изричното съгласие на Купувача.</p>
        <p style={{ marginLeft: '2rem' }}>7.11.4 Продавачът не отговаря, ако забавянето в доставката се дължи на действия на спедитора/ превозвача.</p>
        <p style={{ marginLeft: '2rem' }}>7.11.5 Купувачът може да избере доставка до личен адрес или до избран офис на куриерската компания.</p>
        <p>7.12 Купувачът може да заплати дължимата сума по следните начини:</p>
        <ol style={{ marginLeft: '2rem' }}>
          <li>По банков път на следната банкова сметка: IBAN: BG10FINV91501017669626</li>
          <li>Чрез наложен платеж при получаване на доставката.</li>
        </ol>
        <p>7.13 Банковият превод може да бъде нареден чрез използване на всички допустими и разрешени от закона способи, вкл., но не само: нареждане на превод на място в банка; използване на приложенията за онлайн банкиране, използване на PayPal, EasyPay и други подобни.</p>
        <p>7.14 Наложният платеж се извършва при получаване на доставката и след като клиентът е упражнил всички права по преглеждане на стоката. Той може да бъде в брой или чрез използване на ПОС терминал, който се предоставя от служител на куриерската компания.</p>
        <p>7.15 Купувачът дължи цената, посочена в онлайн магазина. Задължението за плащане на уговорената цена, се счита за изпълнено от купувача, в зависимост от избрания от него метод на плащане.</p>
        <p style={{ marginLeft: '2rem' }}>7.15.1 В случай, че купувачът избере да заплати цената чрез "наложен платеж" при доставка, задължението му се счита за изпълнено, в момента на плащане на сумата на спедитора/ превозвача, за което му се издава документ.</p>
        <p style={{ marginLeft: '2rem' }}>7.15.2 Ако купувачът избере да заплати цената по "банков път", задължението му се счита за изпълнено, в момента на получаване на потвърждение за приемане на плащането, за което му се издава документ.</p>
        <p>7.16 Купувачът може да се обърне към нас за съдействие, в случай че иска стоката да бъде заменена, има въпрос по отношение на качествата на даден артикул или има други запитвания свързани със стоките, начините на плащане, възможностите на уебсайта и други.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>8. Право на отказ от договора</h2>
        <p>8.1 Потребителят има право да се откаже от договора, без да посочва причина, без да дължи обезщетение или неустойка и без да заплаща каквито и да е разходи, с изключение на разходите, предвидени в чл. 54, ал. 3 и чл. 55 от ЗЗП, в 14-дневен срок, считано от датата на:</p>
        <ol style={{ marginLeft: '2rem' }}>
          <li>сключване на договора;</li>
          <li>приемане на стоките от потребителя или от трето лице, различно от куриера и посочено от потребителя - при договор за продажба, или:
            <ol type="a" style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
              <li>когато потребителят е поръчал много стоки с една поръчка, които се доставят отделно, считано от датата, на която потребителят или трето лице, различно от превозвача и посочено от потребителя, приема последната стока;</li>
              <li>при доставка на стока, която се състои от множество партиди или части, считано от датата, на която потребителят или трето лице, различно от превозвача и посочено от потребителя, приема последната партида или част;</li>
              <li>при договори за редовна доставка на стоки, която се извършва през определен период от време, считано от датата, на която потребителят или трето лице, различно от превозвача и посочено от потребителя, приемане на първата стока;</li>
            </ol>
          </li>
        </ol>
        <p>8.2 Потребителят има право да се откаже от договора, ако продавачът разполага само с част от поисканите артикули, въпреки че поръчката на потребителя е приета.</p>
        <p style={{ marginLeft: '2rem' }}>8.2.1 Потребителят може да се съгласи да получи наличните артикули, като цената се намалява съответно със стойността на артикулите, които не са в наличност.</p>
        <p style={{ marginLeft: '2rem' }}>8.2.2 Продавачът не носи отговорност за изчерпани наличности на артикулите.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>9. Сигнали, запитвания, оплаквания</h2>
        <p>9.1 При констатирани нередности, потребителите имат право да подадат сигнал или оплакване на посочения за това имейл, телефон или друг способ за свързване с търговеца.</p>
        <p>9.2 Потребителите имат право да отправят запитвания свързани с конкретни продукти и да поискат разяснения относно описанието на дадения артикул.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>10. Защита на личните данни</h2>
        <p>10.1. Търговецът се задължава да обработи предоставените от купувача лични данни в съответствие с Регламент 2016/679 и актовете по приложението му и българския Закон за защита на личните данни, като събира, обработва и споделя предоставените от клиента данни единствено за нуждите на направените от него поръчки и с цел подобряване на обслужването на потребителите и персонализиране на техния избор.</p>
        <p>10.2. Личните данни, които клиента предоставя, са свързани с процеса на регистрация или сключване на договор за покупко-продажба.</p>
        <p style={{ marginLeft: '2rem' }}>10.2.1 Полетата, които са маркирани като задължителни като име, фамилия/наименование, адрес, държава, трябва да бъдат посочени с вярна, пълна и точна информация.</p>
        <p style={{ marginLeft: '2rem' }}>10.2.2 Полетата в потребителския профил, които не са обозначени като задължителни, се попълват само по избор и при желание от страна на онлайн потребителя.</p>
        <p style={{ marginLeft: '2rem' }}>10.2.3 Гостите са задължени да посочат минимален брой лични данни, който е нужен за изпълнение на договора за покупко-продажба, като адрес на доставка/офис на куриер, име и фамилия на лицето, което ще получи пратката и по избор, допълнителни данни за връзка като мобилен телефон и имейл.</p>
        <p style={{ marginLeft: '2rem' }}>10.2.4 Онлайн потребителите вече се ползват от въведената в профилите им информация когато извършват договор за покупко-продажба.</p>
        <p>10.3 Търговецът няма право да предоставя лични данни на купувача на трети страни, освен за целите на изпълнението на договора за покупко-продажба и доставката на стоката.</p>
        <p>10.4 Търговецът си запазва пълното право да предоставя лични данни и потребителска информация на клиента, а също и история на покупките, при поискване от страна на компетентни държавни органи по надлежния ред или по повод възникнал съдебен спор с клиента.</p>
        <p>10.5 Доставчикът на услугата има право да събира данни за поведението на потребителя, чрез използването на "бисквитки"(cookies), съгласно политиката на бисквитките(Т. 8)</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #00966e', paddingBottom: '0.5rem', marginBottom: '1rem' }}>11. Политика на бисквитките</h2>
        <p>11.1. Бисквитките са малки текстови файлове, които се генерират при заявка от Вашия браузър към наш уеб сървър и се съхраняват на устройството Ви. Обикновено целта им е да се идентифицира Вашето устройство и поведението му при посещение на сайтовете ни.</p>
        <p>11.2 Има два вида бисквитки – постоянни и временни (сесийни бисквитки).</p>
        <p>11.3 Сесийните бисквитки се съхраняват временно в компютъра Ви, когато посещавате нашия Сайт, но се изтриват в момента, в който затворите страницата.</p>
        <p>11.4 Постоянните бисквитки се съхраняват като файл на вашия компютър или мобилно устройство за по-дълъг период от време.</p>
        <p>11.5 С изключение на бисквитките, необходими за функционирането на нашия сайт, съхраняваме бисквитки на устройството Ви единствено с Ваше съгласие. Ако не искате да приемате бисквитки, можете да коригирате настройките на браузъра си – повече информация за това ще намерите в края на този документ.</p>
        <p>11.6 Ако предпочитате да не получавате "бисквитки" докато разглеждате уебсайта ни, бихте могли да ги откажете, като настроите интернет браузъра си да предупреждава преди да приеме бисквитка или да откажете бисквитки, когато интернет браузъра Ви сигнализира за наличието им. Също така, бихте могли да откажете всички бисквитки, като ги изключите чрез настройките на Вашия интернет браузър. Имайте предвид, че забраняването на бисквитки ще се отрази на функционалността на този и много други уебсайтове, които посещавате. Деактивираните бисквитки обикновено ще доведат също до деактивиране на определени функции на уебсайта ни.</p>
        <p>11.7 Онлайн потребителят или гостът знае кога и дали неговият браузър получава бисквитки, тъй като той го уведомява при първо посещение на уебсайта на продавача. По този начин те имат възможност да приемат или откажат дадена бисквитка.</p>
        <p>11.8 Определени "бисквитки" са необходими, за да можем сигурно да предоставим нашите услуги чрез уеб-страницата. Тази категория включва, напр.:</p>
        <p style={{ marginLeft: '2rem' }}>11.8.1 "Бисквитки", които идентифицират или удостоверяват нашите потребители;</p>
        <p style={{ marginLeft: '2rem' }}>11.8.2 "Бисквитки", които временно съхраняват определени потребителски данни (например съдържание на онлайн формуляр);</p>
        <p style={{ marginLeft: '2rem' }}>11.8.3 "Бисквитки", които съхраняват определени потребителски предпочитания (напр. настройки за търсене или настройки за език);</p>
        <p style={{ marginLeft: '2rem' }}>11.8.4 "Бисквитки", които съхраняват данни, за да осигурят безпрепятствено възпроизвеждане на видео или аудио съдържание.</p>
        <p>11.9 Аналитичните "бисквитки" се използват, за да се регистрира поведението на потребителите (напр. кликване върху банери на рекламите, въведени заявки за търсене) и да оценим статистически тези действия.</p>
        <p>11.10 Уебсайтът използва "бисквитки" за рекламни цели. Профилите на поведение на потребителите, създадени с помощта на такива "бисквитки" (напр. кликване върху рекламни банери, посетени подстраници, въведени заявки за търсене) се използват от нас, за да Ви показваме реклами или оферти, които са съобразени с Вашите интереси ("реклама, базирана на индивидуалния интерес").</p>
        <p>11.11 Ние също така позволяваме на други компании да оценяват данните на нашите потребители чрез рекламни "бисквитки". Това позволява на нас и на трети страни да показваме на потребителите на нашата уеб-страница реклами, основана на интереси, които се основават на анализ на вашето поведение на ползване (напр. кликвания върху рекламни банери, посетени подстраници, въведени заявки), като това не се ограничава само до нашите онлайн оферти.</p>
        <p>11.12 Google Analytics се предлага от Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Ползваме Google Analytics с предлаганата от Google допълнителна функция за анонимизиране на IP адресите. Google съкращава IP адреса още в рамките на ЕС и само в изключителни случаи в САЩ, като и в двата случая записва само съкратени IP адреси.</p>
        <p>11.13 Онлайн потребителите и гостите могат да възразят срещу използването на бисквитките, които не са необходими за нормалното функциониране на уебсайта, чрез избиране на опцията за приемане само на необходимите "бисквитки". Те могат да изберат да приемат всички "бисквитки" чрез опцията "приемане на всички".</p>
      </section>
      
      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop} 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#00966e',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            fontSize: '24px',
            zIndex: 999
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy; 