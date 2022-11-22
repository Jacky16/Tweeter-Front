# Data layer

# Data layer

## Data

- User State

      {
        id:string,
        token:string,
        isLogged:boolean,
        username:string,
        email:string
      }

- Tweet

        {
          id:string,
          idUser:string,
          tweetMessage:string
          tweetImage:string
          tweetCategory:enum
        }

- Tweet State

        {
          tweet:Tweet
          tweets:Tweet[]
        }

- UI State

        {
          isLoading:boolean
        }

## Data modifications

### Tweet State

- Load a tweet
- Load tweets

### User State

- Login the user
- Log out the user

### UI State

- Set isLoading true
- Set isLoading false

# Components

## Button

### Show data

- The received text inside a button

### Get actions

- Call the received action on click

## Login form

#### Show data

- A input to type the username
- A input to type the password
- A button to login
- A message with a link with redirection to register page

## Register form

#### Show data

- A input to type the username
- A input to type the password
- A input to type the email

- A button to register
- A message with a link with redirection to login page

## Tweet Card

#### Show data

- The profile image of user
- The message of tweet
- The picture of tweet
- Button Like
- Username
- Alias name
- Date of tweet creation

## Tweet card list

### Show data

- List of Tweet cards

## UserMenu

### Show data

- List of buttons
  - View profile
  - Log out

## Header

### Show data

- The logo
- The UserMenu
