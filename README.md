# PGL is a Pro Golfing Language
Written in JavaScript

PGL is written on a single line, it is stack-based and includes basic maths. You can also make functions and delete from the stack.

Characters:
ANY character will be added to the stack except these ones:
\+
\-
\*
\/
\\
\.
\=
\<
\>
\!
\{
\}

These characters can be escaped with \\

# Functionality

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Character</th>
      <th>Name</th>
      <th>Functionality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\n</td>
      <td>backslash</td>
      <td>Runs the !n+1)th block defined</td>
    </tr>
    <tr>
      <td>*</td>
      <td>asterisk</td>
      <td>Replaces top two elements in stack with their product</td>
    </tr>
    <tr>
      <td>{ }</td>
      <td>curly braces</td>
      <td>starts and ends a new block (like a function)</td>
    </tr>
    <tr>
      <td>< ></td>
      <td>angle brackets</td>
      <td>compares the top two element in stack if true, go to next instruction. otherwise go to the one after</td>
    </tr>
      <td>+</td>
      <td>plus sign</td>
      <td>Replaces top two elements in stack with their sum</td>
    </tr>
    <tr>
      <td>-</td>
      <td>minus sign (hyphen)</td>
      <td>Replaces top two elements in stack with top-(top-1)</td>
    </tr>
    <tr>
      <td>.</td>
      <td>dot</td>
      <td>Prints the element on the top of the stack</td>
    </tr>
    <tr>
      <td>!n</td>
      <td>exclamation mark</td>
      <td>removes stack[n] (stack[0] is the bottom)</td>
    </tr>
    <tr>
      <td>=</td>
      <td>equals</td>
      <td>compares the top two element in stack if true, go to next instruction. otherwise go to the one after</td>
    </tr>
  </tbody>
</table>

#EXAMPLE
example 1.1
add two numbers (5s in this case) to stack and check if they're the same. if they are, run block 0, which prints y, otherwise print n. (FIX ME (BUGGY))
```
{y.}55=\0n.
```
