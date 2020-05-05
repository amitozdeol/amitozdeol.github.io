import { library, dom } from '@fortawesome/fontawesome-svg-core'

// Import solid weight icons
import {
    faTimes,
    faChevronDown,
    faChevronUp,
    faBars,
    faMapMarkerAlt,
    faEnvelopeOpenText,
    faPhone
} from '@fortawesome/free-solid-svg-icons'

// Import brand icons
import {
    faGithub,
    faStackOverflow,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

// Add icons to library
library.add(
    faBars,
    faTimes,
    faChevronDown,
    faChevronUp,
    faMapMarkerAlt,
    faGithub,
    faStackOverflow,
    faLinkedin,
    faEnvelopeOpenText,
    faPhone
)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
