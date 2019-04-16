import 'hybrids/shim'

// Import global stylesheets
import './style.css'

import { define } from 'hybrids'
import AppRoot from './app-root'

// Define root custom elements with application
define('app-root', AppRoot)
