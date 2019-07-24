import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';

import countries from './flags.json';
// import * as markdownNotes from './README.md';
import { FlagComponent } from './flag.component';

const stories = storiesOf('FlagComponent', module),
      countriesOpts = Object.keys(countries);

stories.addDecorator(withKnobs);

stories.add('first flag!', () => ({
  component: FlagComponent,
  props: {
    country: select('Pick a Country', countriesOpts, 'United States', 'FLAG-COUNTRY'),
    onClick: action('clicked')
  }
}),
  { notes: 'These are hardcoded notes, but looking at how to pull in a Markdown file.' } //{ markdown: markdownNotes } }
);
