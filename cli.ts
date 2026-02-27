#!/usr/bin/env node
const {Command} = require("commander")
const axios = require("axios")

const program = new Command()

program.command("greet <name>")
.description("Greeting")
.action((name) => {
    console.log(`Hello ${name}`)
})

program.command("add <num1> <num2>")
.description("Add two numbers")
.action((num1, num2) => {
    console.log(Number(num1)+Number(num2))
})

program.command("sub <num1> <num2>")
.description("Subtract two numbers")
.action((num1, num2) => {
    console.log(Number(num1)-Number(num2))
})

program.command("mul <num1> <num2>")
.description("Multiply two numbers")
.action((num1, num2) => {
    console.log(Number(num1)*Number(num2))
})

program.command("div <num1> <num2>")
.description("Divide two numbers")
.action((num1, num2) => {
    if (Number(num2) === 0){
        console.log("Error: Division By Zero!")
    }
    else{
        console.log(Number(num1)/Number(num2))
    }
})

program.command("joke")
.description("Random Joke")
.action(async () => {
    try{
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
        console.log(res.data.setup)
        console.log(res.data.punchline)
    }
    catch(err){
        console.log(err)
    }
})

program.command("quote")
.description("Random Quote")
.action(async () => {
    try{
        const res = await axios.get("https://zenquotes.io/api/random")
        console.log(res.data[0].q)
        console.log(`By: ${res.data[0].a}`)
    }
    catch(err){
        console.log(err)
    }
})
program.parse()
