workflow "Node CI" {
  on = "push"
  resolves = ["ESLint"]
}

action "ESLint" {
  uses = "stefanoeb/eslint-action@master"
}
