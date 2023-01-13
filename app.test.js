const { appEnv, appVersion } = require('./app')

describe('App Tests - Default ENV Values', () => {
  const originalEnv = process.env

  afterEach(() => {
    // Reset process.env after each test case
    process.env = originalEnv
  })

  describe('APP_VERSION Tests', () => {
    it('should return default value when APP_VERSION', () => {
      const result = appVersion()

      expect(result).toBe(`App's version is v0.1`)
    })

    it('should throw an error if APP_VERSION is not defined', () => {
      process.env = { APP_VERSION: undefined }
      // OR process.env = {}

      expect(appVersion).toThrow('APP_VERSION is not defined')
    })
  })

  describe('NODE_ENV Tests', () => {
    it('should return default value when NODE_ENV', () => {
      const result = appEnv()

      expect(result).toBe('App is running on local environment')
    })

    it('should throw an error if NODE_ENV is not defined', () => {
      process.env = { NODE_ENV: undefined }
      // OR process.env = {}

      expect(appEnv).toThrow('NODE_ENV is not defined')
    })
  })
})

describe('App Tests - Manual ENV Values', () => {
  const originalEnv = process.env

  beforeEach(() => {
    // Override process.env object before each test case:
    process.env = {
      NODE_ENV: 'prod',
      APP_VERSION: 'v1.0',
    }
    // By default the value of process.env.NODE_ENV is test when running tests with jest
  })

  afterEach(() => {
    // Reset process.env value after each test case
    process.env = originalEnv
  })

  describe('APP_VERSION Tests', () => {
    it('should return correct value when APP_VERSION is defined', () => {
      const result = appVersion()

      expect(result).toBe(`App's version is v1.0`)
    })

    it('should throw an error if APP_VERSION is not defined', () => {
      process.env = { APP_VERSION: undefined }
      // OR process.env = {}

      expect(appVersion).toThrow('APP_VERSION is not defined')
    })
  })

  describe('NODE_ENV Tests', () => {
    it('should return correct value when NODE_ENV is defined', () => {
      const result = appEnv()

      expect(result).toBe('App is running on prod environment')
    })

    it('should throw an error if NODE_ENV is not defined', () => {
      process.env = { NODE_ENV: undefined }
      // OR process.env = {}

      expect(appEnv).toThrow('NODE_ENV is not defined')
    })
  })
})
