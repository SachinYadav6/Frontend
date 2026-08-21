# React Revision — Props & Reusable Components

## 1. Components

React mein UI ko reusable parts mein divide kar sakte hain.

Example:

```jsx
function Card() {
  return <div>Card</div>
}
```

Component ka naam generally **Capital Letter** se start karte hain.

```jsx
Card.jsx
```

---

## 2. Reusable Components

Ek hi component ko multiple times use kar sakte hain.

```jsx
<Card />
<Card />
<Card />
```

Isse code repeat karne ki zarurat kam hoti hai.

---

## 3. Props

**Props ka use parent component se child component mein data bhejne ke liye hota hai.**

### Parent

```jsx
<Card
  heading="Sachin"
  description="Most handsome person"
  img_url="image-url"
/>
```

### Child

```jsx
function Card(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
      <img src={props.img_url} />
    </div>
  )
}
```

### Flow

```text
App
 ↓
Card
 ↓
props
 ↓
UI
```

---

## 4. Different Props

Ek component ko multiple props bhej sakte hain.

```jsx
<Card
  heading="Sachin"
  description="Most handsome person"
  img_url="image-url"
/>
```

Child component mein:

```jsx
props.heading
props.description
props.img_url
```

---

## 5. Props Reuse

Same `Card` component ko different data ke saath use kar sakte hain.

```jsx
<Card
  heading="Sachin"
  img_url="image1.jpg"
/>

<Card
  heading="Rahul"
  img_url="image2.jpg"
/>

<Card
  heading="Amit"
  img_url="image3.jpg"
/>
```

Component same hai, lekin data different hai.

---

## 6. Fallback Value

Agar prop nahi mila, toh fallback value de sakte hain.

JavaScript ka `||` operator use kar sakte hain.

```jsx
<h1>{props.heading || "Unknown Person"}</h1>
```

Agar:

```jsx
props.heading = "Sachin"
```

output:

```text
Sachin
```

Agar `heading` nahi diya:

```text
Unknown Person
```

---

## 7. Description Fallback

Same concept description ke liye:

```jsx
<p>
  {props.description || "No description available"}
</p>
```

---

## 8. Important Points

* Props **read-only** hote hain.
* Child component ko props parent se milte hain.
* Props ke through data pass kar sakte hain.
* Same component ko different props ke saath reuse kar sakte hain.
* Component names ko **PascalCase** mein likhna recommended hai.
* `||` se fallback/default value de sakte hain.

---

## 9. Current Card Example

```jsx
function Card(props) {
  return (
    <div className="card">
      <img src={props.img_url} alt="men profile" />

      <h1>
        {props.heading || "Unknown Person"}
      </h1>

      <p>
        {props.description || "No description available"}
      </p>

      <button>View Profile</button>
    </div>
  )
}
```

## Revision Formula

```text
Parent Component
       ↓
     Props
       ↓
Child Component
       ↓
     Render UI
```

**Props = Parent se Child ko data bhejna.**
