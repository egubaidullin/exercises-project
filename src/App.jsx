import React, { useState } from 'react';
    import { useSwipeable } from 'react-swipeable';

    const workoutPlans = {
      en: [
        {
          title: 'Day 1: Strength and Testosterone',
          text: `Warm-up: 5-10 minutes\n\nStrength Exercises:\nSquats: 3 sets of 10-15 reps\nPush-ups: 3 sets of 10-20 reps (can do on knees if difficult)\nPlank: 3 sets of 30-60 seconds\nDumbbell Rows: 3 sets of 8-12 reps (use water bottles if no dumbbells)\n\nCardio:\nJump rope or running in place: 5 minutes\nStair climbing: 5 minutes\n\nCool-down: 5-10 minutes`,
        },
        {
          title: 'Day 2: Energy and Stress Relief',
          text: `Warm-up: 5 minutes\n\nBreathing Practices:\n"4-7-8" technique: 5 repetitions\nKapalabhati: 30 seconds, 30 seconds rest. Repeat 3-5 times.\n\nStretching:\nForward bends: 20 seconds\nNeck stretches: 5 reps each side\n\nOffice Energy Exercises (skip if not in office):\nFist clenches: 5 reps, 10 seconds\nAbdominal muscle tension: 10 reps, 10 seconds\nCalf raises: 15-20 reps\nArm swings: 10 forward and backward\nEye warm-up: "20-20-20"\n\nCool-down: 5 minutes`,
        },
        {
          title: 'Day 3: Strength and Functionality',
          text: `Warm-up: 5-10 minutes\n\nStrength Exercises:\nPush-ups: 3 sets of 10-20 reps\nSquats: 3 sets of 10-15 reps\nPlank: 3 sets of 30-60 seconds\n\nCardio:\nRunning in place: 10 minutes\n\nStretching: 5-10 minutes`,
        },
        {
          title: 'Day 4: Libido and Yoga',
          text: `Warm-up: 5 minutes\n\nKegel for men:\n10-15 reps, hold for 5 seconds\n\nYoga:\nCobra Pose (Bhujangasana): 20 seconds, 3 sets\nBridge Pose: 10-15 seconds, 3 sets\n\nMeditation:\n5-10 minutes (any technique, e.g., breath meditation)\n\nCool-down: 5 minutes`,
        },
        {
          title: 'Day 5: Tibetan Exercises',
          text: `Warm-up: 5 minutes\n\nFive Tibetan Rites:\nStart with 3-5 reps each, gradually increase to 21\n\nTibetan Breathing Techniques:\nPranayama "Full Breath": 10-15 cycles\n"Fire Breath" (Kapalabhati): 3-5 cycles of 20-30 exhales\n\nCool-down: 5 minutes`,
        },
        {
          title: 'Day 6: Recovery and Energy',
          text: `Warm-up: 5 minutes\n\nEnergy Practices:\nRubbing energy points: 20-30 seconds each\n"Circular Energy" exercise: 3-5 cycles\n\nMeditation:\nChakra meditation: 1-2 minutes per chakra\nCandle meditation (Trataka): 5-10 minutes (if possible)\n\nQuick recovery techniques:\nContrast shower: 3-5 cycles\nSelf-massage: neck, feet, ears\n\nCool-down: 5 minutes`,
        },
        {
          title: 'Day 7: Rest',
          text: 'Complete rest. Take a light walk in the fresh air.',
        },
      ],
      ru: [
        {
          title: 'День 1: Сила и тестостерон',
          text: `Разминка: 5-10 минут\n\nСиловые упражнения:\nПриседания: 3 подхода по 10-15 повторений\nОтжимания: 3 подхода по 10-20 повторений (если сложно, можно отжиматься от колен)\nПланка: 3 подхода по 30-60 секунд\nТяга гантелей в наклоне: 3 подхода по 8-12 повторений (если нет гантелей, можно использовать бутылки с водой или другие тяжелые предметы)\n\nКардио:\nСкакалка или бег на месте: 5 минут\nПодъем по лестнице: 5 минут\n\nЗаминка: 5-10 минут`,
        },
        {
          title: 'День 2: Энергия и снятие стресса',
          text: `Разминка: 5 минут\n\nДыхательные практики:\nТехника "4-7-8": 5 повторений\nКапалабхати: 30 секунд выполнения, 30 секунд отдыха. Повторить 3-5 раз.\n\nРастяжка:\nНаклоны к полу: 20 секунд\nРастяжка шеи: 5 повторений на каждую сторону\n\nЭнергетические упражнения для офиса (если вы работаете в офисе, иначе можно пропустить):\nСжатие кулаков: 5 повторений, 10 секунд\nНапряжение мышц пресса: 10 повторений, 10 секунд\nПодъемы на носки: 15-20 повторений\nМахи руками: 10 раз вперед и назад\nРазминка для глаз: "20-20-20"\n\nЗаминка: 5 минут`,
        },
        {
          title: 'День 3: Сила и функционал',
          text: `Разминка: 5-10 минут\n\nСиловые упражнения:\nОтжимания: 3 подхода по 10-20 повторений\nПриседания: 3 подхода по 10-15 повторений\nПланка: 3 подхода по 30-60 секунд\n\nКардио:\nБег на месте: 10 минут\n\nРастяжка: 5-10 минут`,
        },
        {
          title: 'День 4: Либидо и йога',
          text: `Разминка: 5 минут\n\nКегель для мужчин:\n10-15 повторений, удерживая напряжение 5 секунд\n\nЙога:\nПоза Кобры (Бхуджангасана): 20 секунд, 3 подхода\nПоза Моста: 10-15 секунд, 3 подхода\n\nМедитация:\n5-10 минут медитации (можно выбрать любую технику, например, медитацию на дыхание)\n\nЗаминка: 5 минут`,
        },
        {
          title: 'День 5: Тибетские упражнения',
          text: `Разминка: 5 минут\n\nПять тибетских жемчужин:\nНачинайте с 3-5 повторений каждого упражнения, постепенно увеличивая до 21\n\nТибетские дыхательные техники:\nПранаяма "Полное дыхание": 10-15 циклов\n"Огненное дыхание" (Капалабхати): 3-5 циклов по 20-30 выдохов\n\nЗаминка: 5 минут`,
        },
        {
          title: 'День 6: Восстановление и энергия',
          text: `Разминка: 5 минут\n\nЭнергетические практики:\nРастирание энергетических точек: 20-30 секунд на каждую точку\nУпражнение "Круговая энергия": 3-5 циклов\n\nМедитация:\nМедитация на чакры: 1-2 минуты на каждую чакру\nМедитация на свечу (Тратака): 5-10 минут (если есть возможность)\n\nБыстрые техники восстановления:\nКонтрастный душ: 3-5 циклов\nСамомассаж: шея, стопы, ушные раковины\n\nЗаминка: 5 минут`,
        },
        {
          title: 'День 7: Отдых',
          text: 'Полный отдых. Можно совершить легкую прогулку на свежем воздухе.',
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

      return (
        <div className="workout-container" {...swipeHandlers}>
          <h2 className="day-title">{workoutPlans[language][currentDay].title}</h2>
          <pre className="workout-text">{workoutPlans[language][currentDay].text}</pre>
          <div className="language-switcher">
            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('ru')}>Русский</button>
          </div>
        </div>
      );
    }

    export default App;
