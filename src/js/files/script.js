// Підключення функціоналу "Чертоги Фрілансера"
import { indexInParent, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {
        const targetElement = e.target

        if (document.querySelector('.menu__item.open') && !targetElement.closest('.menu__item.open')) {
            document.querySelector('.menu__item.open').classList.remove('open')
        }


        if (targetElement.closest('.menu__link') && htmlTag.closest('.touch')) {
            let menuItem = targetElement.closest('.menu__item')

            if (targetElement.closest('.menu__item.open')) {
                menuItem.classList.remove('open')
                return
            }
            if (document.querySelector('.menu__item.open') && !targetElement.closest('.menu__item.open')) {
                document.querySelector('.menu__item.open').classList.remove('open')
                menuItem.classList.add('open')
                return
            }
            if (!targetElement.closest('.menu__item.open')) {
                menuItem.classList.add('open')
            }
            // if (targetElement.closest('.menu__item')) {
            //     menuItem.classList.remove('open')
            // }



        }
    })


    function initQuiz() {
        let quiz = document.querySelector('[data-quiz]')
        if (quiz) {

            let quizControl = document.querySelector('.quiz__control')
            let quizNextBtn = document.querySelector('[data-quiz-next]')
            let steps = quiz.querySelectorAll('[data-step]')

            quizNextBtn.addEventListener('click', (e) => {
                let activeStep = quiz.querySelector('[data-step]._active')
                console.log('activeStep', activeStep);



                if (activeStep) {
                    let inputs = activeStep.querySelectorAll('input')
                    let countChecked = 0
                    inputs.forEach(input => {
                        if (input.checked) {
                            countChecked++
                        }
                    });

                    if (countChecked > 0) {
                        quizControl.classList.remove('_error')
                        let indexParent = indexInParent(quiz, activeStep) + 1
                        activeStep.classList.remove('_active')
                        steps[indexParent].classList.add('_active')

                        if (steps.length == indexParent + 1) {
                            quizControl.classList.add('_hide')
                        }
                    } else {
                        quizControl.classList.add('_error')
                    }

                }
            })
        }

    }
    initQuiz()

}