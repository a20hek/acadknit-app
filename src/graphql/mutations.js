/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          owner
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          owner
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          owner
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
export const createInterest = /* GraphQL */ `
  mutation CreateInterest(
    $input: CreateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    createInterest(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const updateInterest = /* GraphQL */ `
  mutation UpdateInterest(
    $input: UpdateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    updateInterest(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const deleteInterest = /* GraphQL */ `
  mutation DeleteInterest(
    $input: DeleteInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    deleteInterest(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const createClub = /* GraphQL */ `
  mutation CreateClub(
    $input: CreateClubInput!
    $condition: ModelClubConditionInput
  ) {
    createClub(input: $input, condition: $condition) {
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
export const updateClub = /* GraphQL */ `
  mutation UpdateClub(
    $input: UpdateClubInput!
    $condition: ModelClubConditionInput
  ) {
    updateClub(input: $input, condition: $condition) {
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
export const deleteClub = /* GraphQL */ `
  mutation DeleteClub(
    $input: DeleteClubInput!
    $condition: ModelClubConditionInput
  ) {
    deleteClub(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      userMessagesId
      owner
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      userMessagesId
      owner
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      userMessagesId
      owner
    }
  }
`;
export const createInvite = /* GraphQL */ `
  mutation CreateInvite(
    $input: CreateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    createInvite(input: $input, condition: $condition) {
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
export const updateInvite = /* GraphQL */ `
  mutation UpdateInvite(
    $input: UpdateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    updateInvite(input: $input, condition: $condition) {
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
export const deleteInvite = /* GraphQL */ `
  mutation DeleteInvite(
    $input: DeleteInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    deleteInvite(input: $input, condition: $condition) {
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
export const createUserInterests = /* GraphQL */ `
  mutation CreateUserInterests(
    $input: CreateUserInterestsInput!
    $condition: ModelUserInterestsConditionInput
  ) {
    createUserInterests(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserInterests = /* GraphQL */ `
  mutation UpdateUserInterests(
    $input: UpdateUserInterestsInput!
    $condition: ModelUserInterestsConditionInput
  ) {
    updateUserInterests(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserInterests = /* GraphQL */ `
  mutation DeleteUserInterests(
    $input: DeleteUserInterestsInput!
    $condition: ModelUserInterestsConditionInput
  ) {
    deleteUserInterests(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserClubs = /* GraphQL */ `
  mutation CreateUserClubs(
    $input: CreateUserClubsInput!
    $condition: ModelUserClubsConditionInput
  ) {
    createUserClubs(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserClubs = /* GraphQL */ `
  mutation UpdateUserClubs(
    $input: UpdateUserClubsInput!
    $condition: ModelUserClubsConditionInput
  ) {
    updateUserClubs(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserClubs = /* GraphQL */ `
  mutation DeleteUserClubs(
    $input: DeleteUserClubsInput!
    $condition: ModelUserClubsConditionInput
  ) {
    deleteUserClubs(input: $input, condition: $condition) {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
      id
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
      id
      author
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
      id
      author
      content
      createdAt
      updatedAt
    }
  }
`;
