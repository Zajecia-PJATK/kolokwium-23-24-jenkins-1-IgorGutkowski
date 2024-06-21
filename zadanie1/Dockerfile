FROM jenkins/jenkins:lts

USER root
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY install-plugins.sh /usr/local/bin/install-plugins.sh
RUN chmod +x /usr/local/bin/install-plugins.sh

USER jenkins

ENTRYPOINT ["/usr/local/bin/install-plugins.sh"]
