import dotenv from 'dotenv'
import reporter, { Options } from 'cucumber-html-reporter'
import { env } from '../env/parseEnv'

dotenv.config({path: env('COMMON_CONFIG_FILE')})

const options: Options = {
    theme: 'bootstrap',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: false,
}

reporter.generate(options)