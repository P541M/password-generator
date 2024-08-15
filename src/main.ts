import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const updatedAppConfig = {
  ...appConfig,
  providers: [provideHttpClient(withFetch()), ...(appConfig.providers || [])],
};

bootstrapApplication(AppComponent, updatedAppConfig).catch((err) =>
  console.error(err)
);
