import { createMachine } from "xstate";

export const promiseMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALAdASwgBswBiAMQFEAVAYQAlFQAHAe1jzTxYDtGQAPRAEYA7ABYcABmmShQgMySArACYhSpSIA0IAJ7CAHADYcATnPmhRgyIUqxSgL6OdqTLiZhuEPNyjkAVQAZMgBJIKC+VnZOHj5BBFUdfUSVUzMLA0VxEWUjZ1d0bBxPb19-ACUKACkKGiootg4uXiQBYRF0mVkFZTUNbT1EUyEpboMlUxUbY3yXEDdi2ABXDAw4WHw0MABbWBJQqgoAWRwaINCaAGlGmJb4xHl5UdlJMSelWQNJIzEjZMQmhEGXMWSEYjEuQMYgKCyKuBWaw2W12JAAQgBBa63ZpxNoJeQieQ4FSSLJGMm2ERKSHyAGpdIWSyTakGdSwxa4ZAAQzwhGWACdSFUqBUAJo42KtUAJURdGRyRSqdSaekKeXdcEyAbOebcFgQOB8Tn4IhgSX3fGIMQqNXfEGWEZGaymDnwkpeHx+C14mWIabpIwqT5CSSmcRKoyDFIKJQ4T7deRGUxKINCN3uHCI9awTYcXbwNrRXHS9oIISmCSvG1qUxGSZh21DRLPHBPJ4qJPUrXyDNLVY5vPbHY+0sJP7AsQGOvKZTGKH0pRPHBZDtdpQ9vsIgcbUcPcu5KShmsV+umRv0hwmJk2OSpslGXvzE08vmC81FppS-c2+lTNvtmIPy5O83ZbnuVrlgYdpjNIvQjLYTwiLqjhAA */
  createMachine({
    id: "fetch",
    initial: "idle",
    states: {
      idle: {
        on: {
          FETCH: {
            target: "pending",
          },
        },
      },
      pending: {
        on: {
          FULFILL: {
            target: "success",
          },
          REJECT: {
            target: "failure",
          },
        },
      },
      success: {
        initial: "items",
        states: {
          items: {
            on: {
              "ITEM.CLICK": {
                target: "item",
              },
            },
          },
          item: {
            on: {
              BACK: {
                target: "items",
              },
            },
          },
        },
      },
      failure: {
        on: {
          RETRY: {
            target: "pending",
          },
        },
      },
    },
  });
