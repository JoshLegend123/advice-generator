const mainAdvice = document.getElementById('advice')
const dice = document.getElementById('dice')
const adviceTag = document.getElementById('advice-tag')
async function fetchRandomAdvice() {
    try {
        const response = await fetch ('https://api.adviceslip.com/advice')
        const data = await response.json()
        return data.slip
    } catch (error) {
        console.log('Error fetching advice:', error)
        return {advice: 'An error occured while fetching advice.', slip_id: null}
    }
}
function displayAdvice(adviceData) {
    mainAdvice.textContent = adviceData.advice
    adviceTag.textContent = `ADVICE
        #${adviceData.id}`
}
dice.addEventListener('click', async () => {
    const adviceData = await fetchRandomAdvice()
    displayAdvice(adviceData)
})
const mediaQuery = window.matchMedia('(max-width: 499px)')
if (mediaQuery.matches) {
    let patternDivider = document.getElementById('pattern-divider')
    patternDivider.src = 'images/pattern-divider-mobile.svg'
}