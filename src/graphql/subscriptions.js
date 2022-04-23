/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      college
      degree
      email
      year
      interests {
        items {
          id
          userID
          interestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          clubID
          createdAt
          updatedAt
          userMessagesId
        }
        nextToken
      }
      joinedClubs {
        items {
          id
          userID
          clubID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      college
      degree
      email
      year
      interests {
        items {
          id
          userID
          interestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          clubID
          createdAt
          updatedAt
          userMessagesId
        }
        nextToken
      }
      joinedClubs {
        items {
          id
          userID
          clubID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      college
      degree
      email
      year
      interests {
        items {
          id
          userID
          interestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          clubID
          createdAt
          updatedAt
          userMessagesId
        }
        nextToken
      }
      joinedClubs {
        items {
          id
          userID
          clubID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateInterest = /* GraphQL */ `
  subscription OnCreateInterest {
    onCreateInterest {
      id
      interestName
      users {
        items {
          id
          userID
          interestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInterest = /* GraphQL */ `
  subscription OnUpdateInterest {
    onUpdateInterest {
      id
      interestName
      users {
        items {
          id
          userID
          interestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInterest = /* GraphQL */ `
  subscription OnDeleteInterest {
    onDeleteInterest {
      id
      interestName
      users {
        items {
          id
          userID
          interestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClub = /* GraphQL */ `
  subscription OnCreateClub {
    onCreateClub {
      id
      clubName
      clubDesc
      joinedUsers {
        items {
          id
          userID
          clubID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          clubID
          createdAt
          updatedAt
          userMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub {
    onUpdateClub {
      id
      clubName
      clubDesc
      joinedUsers {
        items {
          id
          userID
          clubID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          clubID
          createdAt
          updatedAt
          userMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub {
    onDeleteClub {
      id
      clubName
      clubDesc
      joinedUsers {
        items {
          id
          userID
          clubID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          clubID
          createdAt
          updatedAt
          userMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      content
      author {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      clubID
      club {
        id
        clubName
        clubDesc
        joinedUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userMessagesId
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      content
      author {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      clubID
      club {
        id
        clubName
        clubDesc
        joinedUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userMessagesId
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      content
      author {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      clubID
      club {
        id
        clubName
        clubDesc
        joinedUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userMessagesId
    }
  }
`;
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement($owner: String) {
    onCreateAnnouncement(owner: $owner) {
      id
      author
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement($owner: String) {
    onUpdateAnnouncement(owner: $owner) {
      id
      author
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement($owner: String) {
    onDeleteAnnouncement(owner: $owner) {
      id
      author
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateInvite = /* GraphQL */ `
  subscription OnCreateInvite($owner: String) {
    onCreateInvite(owner: $owner) {
      id
      userID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateInvite = /* GraphQL */ `
  subscription OnUpdateInvite($owner: String) {
    onUpdateInvite(owner: $owner) {
      id
      userID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteInvite = /* GraphQL */ `
  subscription OnDeleteInvite($owner: String) {
    onDeleteInvite(owner: $owner) {
      id
      userID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUserInterests = /* GraphQL */ `
  subscription OnCreateUserInterests($owner: String) {
    onCreateUserInterests(owner: $owner) {
      id
      userID
      interestID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      interest {
        id
        interestName
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserInterests = /* GraphQL */ `
  subscription OnUpdateUserInterests($owner: String) {
    onUpdateUserInterests(owner: $owner) {
      id
      userID
      interestID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      interest {
        id
        interestName
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserInterests = /* GraphQL */ `
  subscription OnDeleteUserInterests($owner: String) {
    onDeleteUserInterests(owner: $owner) {
      id
      userID
      interestID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      interest {
        id
        interestName
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUserClubs = /* GraphQL */ `
  subscription OnCreateUserClubs($owner: String) {
    onCreateUserClubs(owner: $owner) {
      id
      userID
      clubID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      club {
        id
        clubName
        clubDesc
        joinedUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserClubs = /* GraphQL */ `
  subscription OnUpdateUserClubs($owner: String) {
    onUpdateUserClubs(owner: $owner) {
      id
      userID
      clubID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      club {
        id
        clubName
        clubDesc
        joinedUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserClubs = /* GraphQL */ `
  subscription OnDeleteUserClubs($owner: String) {
    onDeleteUserClubs(owner: $owner) {
      id
      userID
      clubID
      user {
        id
        name
        college
        degree
        email
        year
        interests {
          nextToken
        }
        messages {
          nextToken
        }
        joinedClubs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      club {
        id
        clubName
        clubDesc
        joinedUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
