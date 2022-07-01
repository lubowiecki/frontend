FROM cypress/included:10.3.0

# install Firefox browser ['en', 'pl']
RUN wget --no-verbose -O /tmp/firefox.tar.bz2 https://download-installer.cdn.mozilla.net/pub/firefox/releases/99.0.1/linux-x86_64/pl/firefox-99.0.1.tar.bz2 && \
  tar -C /opt -xjf /tmp/firefox.tar.bz2 && \
  rm /tmp/firefox.tar.bz2 && \
  ln -fs /opt/firefox/firefox /usr/bin/firefox

WORKDIR /e2e

ENTRYPOINT ["cypress", "run", "--browser=firefox"]

