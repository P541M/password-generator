import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const updatedServerConfig = {
  ...config,
  providers: [provideHttpClient(withFetch()), ...(config.providers || [])],
};

const bootstrap = () => bootstrapApplication(AppComponent, updatedServerConfig);

export default bootstrap;
