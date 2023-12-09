# Tree

This is a LinkTree clone built with React. It displays a profile picture, name, bio, and customizable external links on a background image.

## Features

- Profile picture component
- Name component  
- Bio component
- Link button component to add infinite external links  
- Fullscreen background image
- Responsive design

## Usage

The main App component composes together the visual components:

```jsx
function Home() {

  return (
    <div className="h-screen" style={{backgroundImage}}>
      <ProfilePic />
      <Name /> 
      <Bio />

      <div className="links">
        <LinkButton/> 
        <LinkButton/>  
      </div>
    </div>
  )
}
```

Simply modify the background, pass the relevant props to the above components, and add/configure LinkButton components to create your own LinkTree.

## Customizing

The background image and link buttons can be fully customized by modifying the appropriate assets and component props.

Component props:

- ProfilePic - src 
- Name - children
- Bio - children 
- LinkButton - link, linkName 

## Contributing

Pull requests are welcome to improve the components and add additional customization features. Please open an issue first to discuss proposed changes.

## License

MIT

Let me know if you would like any sections expanded or additional details covered!
