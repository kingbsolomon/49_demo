function staircase(n) {
    for(let i=1; i<=n; i++){
        let spaces = n-i;
        console.log(`${" ".repeat(spaces)}${"#".repeat(i)}`)
    }
}


staircase(5)