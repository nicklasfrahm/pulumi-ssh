import * as ssh from "@pulumi/ssh";

const content = `#!/bin/bash
echo "Hello, $1"
`;

const greetScript = new ssh.File("greet", {
  name: "/usr/local/bin/greet",
  mode: 777,
  content,
});

export const output = greetScript.name;
