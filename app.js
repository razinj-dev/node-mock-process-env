function appEnv() {
  const currentEnv = process.env.NODE_ENV

  if (!currentEnv) {
    throw new Error('NODE_ENV is not defined')
  }

  return `App is running on ${currentEnv} environment`
}

function appVersion() {
  const currentAppVersion = process.env.APP_VERSION

  if (!currentAppVersion) {
    throw new Error('APP_VERSION is not defined')
  }

  return `App's version is ${currentAppVersion}`
}

module.exports = { appEnv, appVersion }
