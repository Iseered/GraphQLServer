const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar JSON

  type Country {
    name: Name!
    tld: [String]!
    cca2: String!
    ccn3: String!
    cca3: String!
    cioc: String
    independent: Boolean!
    status: String!
    unMember: Boolean!
    currencies: JSON
    idd: Idd
    capital: [String]
    altSpellings: [String]!
    region: String!
    subregion: String!
    languages: JSON
    translations: JSON
    latlng: [Float]!
    landlocked: Boolean!
    borders: [String]
    area: Float!
    demonyms: JSON
    flag: String!
    maps: Maps
    population: Int!
    gini: JSON
    fifa: String
    car: Car
    timezones: [String]!
    continents: [String]!
    flags: Flags
    coatOfArms: CoatOfArms
    startOfWeek: String
    capitalInfo: CapitalInfo
  }

  type Name {
    common: String!
    official: String!
    nativeName: JSON
  }

  type Idd {
    root: String
    suffixes: [String]
  }

  type Maps {
    googleMaps: String!
    openStreetMaps: String!
  }

  type Car {
    signs: [String]
    side: String!
  }

  type Flags {
    png: String!
    svg: String!
  }

  type CoatOfArms {
    png: String
    svg: String
  }

  type CapitalInfo {
    latlng: [Float]
  }

  type Query {
    countries: [Country]!
    country(cca3: String!): Country
  }
`;

module.exports = typeDefs;
