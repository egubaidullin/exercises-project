import React, { useState } from 'react';
    import { useSwipeable } from 'react-swipeable';

    const workoutPlans = {
      en: [
        {
          title: 'Day 1: Strength and Testosterone',
          text: `Warm-up: (5-10 minutes)\n\nWalking in place, arm and leg swings, joint rotations\n\nStrength Exercises:\nSquats: 3 sets of 10-15 reps\nPush-ups: 3 sets of 10-20 reps (on knees if difficult)\nPlank: 3 sets of 30-60 seconds\nDumbbell Rows: 3 sets of 8-12 reps (can use water bottles)\n\nCardio:\nJump rope or running in place: 5 minutes\nStair climbing: 5 minutes\n\nCool-down: (5-10 minutes)\nLight stretching, walking in place`,
        },
        {
          title: 'Day 2: Energy and Stress Relief',
          text: `Warm-up: (5 minutes)\n\nLight arm swings, torso twists\n\nBreathing Practices:\n"4-7-8" technique: 5 repetitions\nKapalabhati: 30 seconds, 30 seconds rest. Repeat 3-5 times\n\nStretching:\nForward bends: 20 seconds\nNeck stretches: 5 tilts each side\n\nOffice Energy Exercises (optional):\nFist clenches: 5 reps, 10 seconds\nAbdominal muscle tension: 10 reps, 10 seconds\nCalf raises: 15-20 reps\nArm swings: 10 forward and backward\nEye warm-up: "20-20-20" (every 20 minutes look at an object 20 meters away for 20 seconds)\n\nCool-down: (5 minutes)\nCalm walking, breathing`,
        },
        {
          title: 'Day 3: Strength and Functionality',
          text: `Warm-up: (5-10 minutes)\n\nLight jumps in place, joint rotations\n\nStrength Exercises:\nPush-ups: 3 sets of 10-20 reps\nSquats: 3 sets of 10-15 reps\nPlank: 3 sets of 30-60 seconds\n\nCardio:\nRunning in place: 10 minutes\n\nStretching: (5-10 minutes)\nStretching leg, back, arm muscles`,
        },
        {
          title: 'Day 4: Libido and Yoga',
          text: `Warm-up: (5 minutes)\n\nPelvic rotations, light bends\n\nKegel for men:\n10-15 reps, hold for 5 seconds\n\nYoga:\nCobra Pose (Bhujangasana): 20 seconds, 3 sets\nBridge Pose: 10-15 seconds, 3 sets\n\nMeditation: (5-10 minutes)\nBreath meditation\n\nCool-down: (5 minutes)\nSlow, smooth movements, calming breathing`,
        },
        {
          title: 'Day 5: Tibetan Exercises',
          text: `Warm-up: (5 minutes)\n\nLight arm swings, bends\n\nFive Tibetan Rites:\nStart with 3-5 reps each, gradually increase to 21\n\nRotation\nLeg and head raise\nBack bend (Camel Pose)\nPelvic lift (Bridge Pose)\nTorso lift with backbend\n\nTibetan Breathing Techniques:\nPranayama "Full Breath": 10-15 cycles\n"Fire Breath" (Kapalabhati): 3-5 cycles of 20-30 exhales\n\nCool-down: (5 minutes)\nCalm walking, deep breathing`,
        },
        {
          title: 'Day 6: Recovery and Energy',
          text: `Warm-up: (5 minutes)\n\nLight shoulder and wrist rotations\n\nEnergy Practices:\nRubbing energy points:\nPalms: Rub palms together until warm.\nThird eye: Massage the point between the eyebrows in circular motions.\nBehind the ears: Massage the points behind the earlobes in circular motions.\nPalms: (additionally) Massage the center of each palm.\n20-30 seconds each point\n"Circular Energy" exercise: 3-5 cycles (visualize energy moving through the body)\n\nMeditation:\nChakra meditation: 1-2 minutes per chakra (visualize each chakra in its color - red (base of spine), orange (below navel), yellow (solar plexus), green (heart), blue (throat), indigo (third eye), violet (crown of head))\nCandle meditation (Trataka): 5-10 minutes (if possible)\n\nQuick recovery techniques:\nContrast shower: 3-5 cycles (30 seconds hot water, 10 seconds cold)\nSelf-massage:\nNeck: kneading neck muscles\nFeet: foot massage\nEars: ear massage\n\nCool-down: (5 minutes)\nBreathing, smooth movements`,
        },
        {
          title: 'Day 7: Rest',
          text: 'Complete rest. Light walk',
        },
      ],
      ru: [
        {
          title: 'День 1: Сила и тестостерон',
          text: `Разминка: (5-10 минут)\n\nХодьба на месте, махи руками и ногами, вращения суставов\n\nСиловые упражнения:\nПриседания: 3 подхода по 10-15 повторений\nОтжимания: 3 подхода по 10-20 повторений (от колен, если сложно)\nПланка: 3 подхода по 30-60 секунд\nТяга гантелей в наклоне: 3 подхода по 8-12 повторений (можно заменить бутылками с водой)\n\nКардио:\nСкакалка или бег на месте: 5 минут\nПодъем по лестнице: 5 минут\n\nЗаминка: (5-10 минут)\nЛегкая растяжка, ходьба на месте`,
        },
        {
          title: 'День 2: Энергия и снятие стресса',
          text: `Разминка: (5 минут)\n\nЛегкие махи руками, повороты корпуса\n\nДыхательные практики:\nТехника "4-7-8": 5 повторений\nКапалабхати: 30 секунд выполнения, 30 секунд отдыха. Повторить 3-5 раз\n\nРастяжка:\nНаклоны к полу: 20 секунд\nРастяжка шеи: 5 наклонов на каждую сторону\n\nЭнергетические упражнения для офиса (можно пропустить):\nСжатие кулаков: 5 повторений, 10 секунд\nНапряжение мышц пресса: 10 повторений, 10 секунд\nПодъемы на носки: 15-20 повторений\nМахи руками: 10 раз вперед и назад\nРазминка для глаз: "20-20-20" (каждые 20 минут смотрите на объект в 20 метрах в течение 20 секунд)\n\nЗаминка: (5 минут)\nСпокойная ходьба, дыхание`,
        },
        {
          title: 'День 3: Сила и функционал',
          text: `Разминка: (5-10 минут)\n\nЛегкие прыжки на месте, вращение суставов\n\nСиловые упражнения:\nОтжимания: 3 подхода по 10-20 повторений\nПриседания: 3 подхода по 10-15 повторений\nПланка: 3 подхода по 30-60 секунд\n\nКардио:\nБег на месте: 10 минут\n\nРастяжка: (5-10 минут)\nРастяжка мышц ног, спины, рук`,
        },
        {
          title: 'День 4: Либидо и йога',
          text: `Разминка: (5 минут)\n\nВращение тазом, легкие наклоны\n\nКегель для мужчин:\n10-15 повторений, удерживая напряжение 5 секунд\n\nЙога:\nПоза Кобры (Бхуджангасана): 20 секунд, 3 подхода\nПоза Моста: 10-15 секунд, 3 подхода\n\nМедитация: (5-10 минут)\nМедитация на дыхание\n\nЗаминка: (5 минут)\nМедленные, плавные движения, успокаивающее дыхание`,
        },
        {
          title: 'День 5: Тибетские упражнения',
          text: `Разминка: (5 минут)\n\nЛегкие махи руками, наклоны\n\nПять тибетских жемчужин:\nНачинайте с 3-5 повторений каждого упражнения, постепенно увеличивая до 21\n\nВращение\nПодъем ног и головы\nПрогиб спины (Поза верблюда)\nПодъем таза (Поза моста)\nПодъем корпуса с прогибом\n\nТибетские дыхательные техники:\nПранаяма "Полное дыхание": 10-15 циклов\n"Огненное дыхание" (Капалабхати): 3-5 циклов по 20-30 выдохов\n\nЗаминка: (5 минут)\nСпокойная ходьба, глубокое дыхание`,
        },
        {
          title: 'День 6: Восстановление и энергия',
          text: `Разминка: (5 минут)\n\nЛегкие вращения плечами, кистями\n\nЭнергетические практики:\nРастирание энергетических точек:\nЛадони: Разотрите ладони друг о друга до ощущения тепла.\nТретий глаз: Массируйте точку между бровями круговыми движениями.\nЗа ушами: Массируйте точки за мочками ушей круговыми движениями.\nЛадони: (дополнительно) Массируйте центральную часть каждой ладони.\nПо 20-30 секунд на каждую точку\nУпражнение "Круговая энергия": 3-5 циклов (визуализация движения энергии по телу)\n\nМедитация:\nМедитация на чакры: 1-2 минуты на каждую чакру (визуализируйте каждую чакру в соответствии с ее цветом – красный (основание позвоночника), оранжевый (ниже пупка), желтый (солнечное сплетение), зеленый (сердце), голубой (горло), синий (межбровье), фиолетовый (макушка головы))\nМедитация на свечу (Тратака): 5-10 минут (если есть возможность)\n\nБыстрые техники восстановления:\nКонтрастный душ: 3-5 циклов (30 секунд горячая вода, 10 секунд холодная)\nСамомассаж:\nШея: разминание мышц шеи\nСтопы: массаж стоп\nУшные раковины: массаж ушных раковин\n\nЗаминка: (5 минут)\nДыхание, плавные движения`,
        },
        {
          title: 'День 7: Отдых',
          text: 'Полный отдых. Легкая прогулка',
        },
      ],
    };

    function App() {
      const [currentDay, setCurrentDay] = useState(0);
      const [language, setLanguage] = useState('en');

      const handleSwipe = (event) => {
        if (event.dir === 'Left' && currentDay < workoutPlans[language].length - 1) {
          setCurrentDay(currentDay + 1);
        } else if (event.dir === 'Right' && currentDay > 0) {
          setCurrentDay(currentDay - 1);
        }
      };

      const swipeHandlers = useSwipeable({
        onSwiped: handleSwipe,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

      const handleLanguageChange = (lang) => {
        setLanguage(lang);
      };

      const handlePrevDay = () => {
        if (currentDay > 0) {
          setCurrentDay(currentDay - 1);
        }
      };

      const handleNextDay = () => {
        if (currentDay < workoutPlans[language].length - 1) {
          setCurrentDay(currentDay + 1);
        }
      };

      const progress = ((currentDay + 1) / 7) * 100;

      return (
        <div className="app-container">
          <div className="language-switcher">
            <button onClick={() => handleLanguageChange('en')}>EN</button>
            <button onClick={() => handleLanguageChange('ru')}>RU</button>
          </div>
          <div className="workout-container" {...swipeHandlers}>
            <h2 className="day-title">{workoutPlans[language][currentDay].title}</h2>
            <pre className="workout-text">{workoutPlans[language][currentDay].text}</pre>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="nav-buttons">
            <button onClick={handlePrevDay} disabled={currentDay === 0}>
              &lt;
            </button>
            <button
              onClick={handleNextDay}
              disabled={currentDay === workoutPlans[language].length - 1}
            >
              &gt;
            </button>
          </div>
        </div>
      );
    }

    export default App;
