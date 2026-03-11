# Markdown Tutorial

Markdown is a lightweight markup language used to format text using simple symbols.  
It is widely used for **README files, documentation, blogs, and websites**.

---

# 1. Headings

Headings are created using `#`.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

Example:

# Heading 1
## Heading 2
### Heading 3

---

# 2. Paragraphs

Just write text normally.

Markdown automatically separates paragraphs with a blank line.

```markdown
This is the first paragraph.

This is the second paragraph.
```

---

# 3. Line Breaks

Add two spaces at the end of a line.

```markdown
Line one  
Line two
```

Line one  
Line two

---

# 4. Bold and Italic

```markdown
*Italic text*

**Bold text**

***Bold and italic***

~~Strikethrough~~
```

Example:

*Italic text*  
**Bold text**  
***Bold and italic***  
~~Strikethrough~~

---

# 5. Lists

## Unordered Lists

```markdown
- Item 1
- Item 2
- Item 3
```

Example:

- Item 1
- Item 2
- Item 3

You can also use `*` or `+`.

---

## Ordered Lists

```markdown
1. First
2. Second
3. Third
```

Example:

1. First
2. Second
3. Third

---

# 6. Nested Lists

```markdown
- Item 1
  - Sub Item
  - Sub Item
- Item 2
```

Example:

- Item 1
  - Sub Item
  - Sub Item
- Item 2

---

# 7. Links

```markdown
[OpenAI](https://openai.com)
```

Example:

[OpenAI](https://openai.com)

---

# 8. Images

```markdown
![Alt Text](https://picsum.photos/200)
```

Example:

![Random Image](https://picsum.photos/200)

---

# 9. Blockquotes

```markdown
> This is a quote
```

Example:

> This is a quote

Nested:

```markdown
> First level
>> Second level
```

---

# 10. Inline Code

```markdown
Use `printf()` in C.
```

Example:

Use `printf()` in C.

---

# 11. Code Blocks

Use triple backticks.

````markdown
```c
#include <stdio.h>

int main() {
    printf("Hello world\n");
    return 0;
}
```
