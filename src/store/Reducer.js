import { initialState } from './State'

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    // User actions
    case 'U_ADD_USER_INFO':
      return {...state,
        user: {
          ...state.user,
          details: {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            phoneNo: action.phoneNo,
            nationalID: action.nationalID,
            username: action.username
          }
        }
      }
    case 'U_ADD_RESIDENCE_INFO':
      return {...state,
        user: {
          ...state.user,
          residence: {
            ...state.user.residence,
            agreementType: action.agreementType,
            period: action.period,
            activity: action.activity,
            startDate: action.startDate,
            session: action.session
          }
        }
      }
    case 'U_ADD_QUARTERS_INFO':
      return {...state,
        user: {
          ...state.user,
          residence: {
            ...state.user.residence,
            quartersName: action.quartersName,
            quartersLocation: action.quartersLocation,
            quartersLandlord: action.quartersLandlord,
            quartersPrice: action.quartersPrice,
            quartersImage: action.quartersImage
          }
        }
      }
    case 'U_UPDATE_TRANSACTIONS':
      return {...state,
        user: {
          ...state.user,
          transactions: {
            payee: [...state.user.transactions.payee, action.payee],
            payable: [...state.user.transactions.payable, action.payable],
            method: [...state.user.transactions.method, action.method],
            refNo: [...state.user.transactions.refNo, action.refNo],
            paid: [...state.user.transactions.paid, action.paid],
            date: [...state.user.transactions.date, action.date]
          }
        }
      }
    case 'U_ADD_LANDLORD_INFO':
      return {...state,
        user: {
          ...state.user,
          landlord: {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            phoneNo: action.phoneNo,
            payDetails: action.payDetails
          }
        }
      }
    case 'U_ADD_MESSAGES':
      return {...state,
        user: {
          ...state.user,
          messages: {
            from: [...state.user.messages.from, action.from],
            to: [...state.user.messages.to, action.to],
            time: [...state.user.messages.time, action.time],
            body: [...state.user.messages.body, action.body]
          }
        }
      }
    case 'U_RESET_MESSAGES':
      return {...state,
        user: {
          ...state.user,
          messages: {
            from: [], to: [], time: [], body: []
          }
        }
      }

    // Landlord actions
    case 'L_ADD_LANDLORD_INFO':
      return {...state,
        landlord: {
          ...state.landlord,
          details: {
            username: action.username,
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password,
            phoneNo: action.phoneNo,
            nationalID: action.nationalID,
            payDetails: action.payDetails
          }
        }
      }
    case 'L_ADD_TENANTS_DETAILS':
      return {...state,
        landlord: {
          ...state.landlord,
          tenants: {
            ...state.landlord.tenants,
            usernames: [...state.landlord.tenants.usernames, action.username],
            firstNames: [...state.landlord.tenants.firstNames, action.firstName],
            lastNames: [...state.landlord.tenants.lastNames, action.lastName],
            emails: [...state.landlord.tenants.emails, action.email],
            phoneNos: [...state.landlord.tenants.phoneNos, action.phoneNo],
            nationalIDs: [...state.landlord.tenants.nationalIDs, action.nationalID]
          }
        }
      }
    case 'L_ADD_TENANTS_RESIDENCE':
      return {...state,
        landlord: {
          ...state.landlord,
          tenants: {
            ...state.landlord.tenants,
            residenceID: [...state.landlord.tenants.residenceID, action.residenceID],
            quartersID: [...state.landlord.tenants.quartersID, action.quartersID],
            agreementTypes: [...state.landlord.tenants.agreementTypes, action.agreementType],
            periods: [...state.landlord.tenants.periods, action.period],
            activeStatus: [...state.landlord.tenants.activeStatus, action.activity],
            startDates: [...state.landlord.tenants.startDates, action.startDate],
            sessions: [...state.landlord.tenants.sessions, action.session]
          }
        }
      }
    case 'L_ADD_LISTINGS_INFO':
      return {...state,
        landlord: {
          ...state.landlord,
          listings: {
            qid: [...state.landlord.listings.qid, action.qid],
            names: [...state.landlord.listings.names, action.name],
            locations: [...state.landlord.listings.locations, action.location],
            vacancies: [...state.landlord.listings.vacancies, action.vacancies],
            features: [...state.landlord.listings.features, action.features],
            prices: [...state.landlord.listings.prices, action.prices],
            images: [...state.landlord.listings.images, action.images]
          }
        }
      }
    case 'L_UPDATE_TRANSACTIONS':
      return {...state,
        landlord: {
          ...state.landlord,
          transactions: {
            transactionsID: [...state.landlord.transactions.transactionsID, action.transactionID],
            payers: [...state.landlord.transactions.payers, action.payer],
            payable: [...state.landlord.transactions.payable, action.payable],
            methods: [...state.landlord.transactions.methods, action.method],
            refNos: [...state.landlord.transactions.refNos, action.refNo],
            paid: [...state.landlord.transactions.paid, action.paid],
            dates: [...state.landlord.transactions.dates, action.date]
          }
        }
      }
    case 'L_ADD_SEARCH_RESULTS':
      return {
        ...state,
        landlord: {
          ...state.landlord,
          searchResults: {
            username: [...state.landlord.searchResults.username, action.username],
            firstName: [...state.landlord.searchResults.firstName, action.firstName],
            lastName: [...state.landlord.searchResults.lastName, action.lastName]
          }
        }
      }
    case 'L_RESET_SEARCH_RESULTS':
      return {...state,
        landlord: {
          ...state.landlord,
          searchResults: {
            username: [], firstName: [], lastName: []
          }
        }
      }
    case 'L_ADD_MESSAGES':
      return {...state,
        landlord: {
          ...state.landlord,
          messages: {
            from: [...state.landlord.messages.from, action.from],
            to: [...state.landlord.messages.to, action.to],
            time: [...state.landlord.messages.time, action.time],
            body: [...state.landlord.messages.body, action.body]
          }
        }
      }
    case 'L_RESET_MESSAGES':
      return {...state,
        landlord: {
          ...state.landlord,
          messages: {
            from: [], to: [], time: [], body: []
          }
        }
      }
    case 'L_RESET_TABLE_DATA':
      if(action.dbtable==='transactions')
        return {...state,
          landlord: {
            ...state.landlord,
            transactions: {
              transactionsID: [], payers: [], payable: [], methods: [], refNos: [], paid: [], dates: []
            }
          }
        }
      else if(action.dbtable==='residence')
        return {...state,
          landlord: {
            ...state.landlord,
            tenants: {
              ...state.landlord.tenants,
              residenceID: [], quartersID: [], agreementTypes: [], periods: [], activeStatus: [], startDates: [], sessions: []
            }
          }
        }
      else if(action.dbtable==='quarters')
        return {...state,
          landlord: {
            ...state.landlord,
            listings: {
              qid: [], names: [], locations: [], vacancies: [], features: [], prices: [], images: []
            }
          }
        }
      break

      // Browse actions
    case 'B_ADD_AVAILABLE_LISTINGS':
      return {...state,
        browse: {
          name: [...state.browse.name, action.name],
          location: [...state.browse.location, action.location],
          vacancies: [...state.browse.vacancies, action.vacancies],
          features: [...state.browse.features, action.features],
          prices: [...state.browse.prices, action.prices],
          images: [...state.browse.images, action.images]
        }
      }
    
      // Default return
    default:
      return state
  }
}