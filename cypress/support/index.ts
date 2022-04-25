import { VisualRegression } from '@cypress/helpers/visual-regression';
import { TestId } from '@cypress/helpers/test-id';
import 'cypress-axe';

VisualRegression.addCommands();
TestId.addCommands();
