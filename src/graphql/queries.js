/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      college
      degree
      email
      year
      interests {
        items {
          interest {
            id
            interestName
          }
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
          club {
            clubDesc
            clubName
          }
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInterest = /* GraphQL */ `
  query GetInterest($id: ID!) {
    getInterest(id: $id) {
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
export const listInterests = /* GraphQL */ `
  query ListInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        interestName
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClub = /* GraphQL */ `
  query GetClub($id: ID!) {
    getClub(id: $id) {
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
export const listClubs = /* GraphQL */ `
  query ListClubs(
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        author {
          id
          name
          college
          degree
          email
          year
          createdAt
          updatedAt
          owner
        }
        clubID
        club {
          id
          clubName
          clubDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userMessagesId
      }
      nextToken
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
      id
      author
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getInvite = /* GraphQL */ `
  query GetInvite($id: ID!) {
    getInvite(id: $id) {
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
export const listInvites = /* GraphQL */ `
  query ListInvites(
    $filter: ModelInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          name
          college
          degree
          email
          year
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserInterests = /* GraphQL */ `
  query GetUserInterests($id: ID!) {
    getUserInterests(id: $id) {
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
export const listUserInterests = /* GraphQL */ `
  query ListUserInterests(
    $filter: ModelUserInterestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        interest {
          id
          interestName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserClubs = /* GraphQL */ `
  query GetUserClubs($id: ID!) {
    getUserClubs(id: $id) {
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
export const listUserClubs = /* GraphQL */ `
  query ListUserClubs(
    $filter: ModelUserClubsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        club {
          id
          clubName
          clubDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userByName = /* GraphQL */ `
  query UserByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const userByDegree = /* GraphQL */ `
  query UserByDegree(
    $degree: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByDegree(
      degree: $degree
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const userByYear = /* GraphQL */ `
  query UserByYear(
    $year: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByYear(
      year: $year
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const interestByInterestName = /* GraphQL */ `
  query InterestByInterestName(
    $interestName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    interestByInterestName(
      interestName: $interestName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        interestName
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clubByName = /* GraphQL */ `
  query ClubByName(
    $clubName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clubByName(
      clubName: $clubName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesbyClub = /* GraphQL */ `
  query MessagesbyClub(
    $clubID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesbyClub(
      clubID: $clubID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        author {
          id
          name
          college
          degree
          email
          year
          createdAt
          updatedAt
          owner
        }
        clubID
        club {
          id
          clubName
          clubDesc
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userMessagesId
      }
      nextToken
    }
  }
`;
