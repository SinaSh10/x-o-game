window.addEventListener('DOMContentLoaded',()=>{
    const tiles=Array.from(document.querySelectorAll('.tile'))
    const playerDisplay=document.querySelector('.display-player')
    const resetButton=document.querySelector('#reset')
    const announcer=document.querySelector('.announcer')
    
    let board=['','','','','','','','','']
    let currentPlayer='X'
    let isGameActive=true

    const playerX_won='PLAYERX_WON'
    const playerO_won='PLAYERO_WON'
    const tie='TIE'
})