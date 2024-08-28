# Monitoring

Operator supports monitoring using Prometheus by providing a `/metrics` endpoint that Prometheus can scrape to gather various metrics.

### Prerequisites

1. Operator application running and accessible.
2. Prometheus server installed and running.
3. Basic knowledge of how to configure Prometheus targets.
4. [Grafana Dashboard](https://grafana.com/grafana/dashboards/19060-v3-operator/) for `v3-operator` installed

### Setup Operator for Monitoring

Operator provides the flexibility to define the host and port for the metrics endpoint via environment variables:

* `ENABLE_METRICS`: This defines whether the metrics endpoint should be enabled or not. By default, it is set to `false`.
* `METRICS_HOST`: This defines the hostname or IP on which the metrics endpoint will be available.
* `METRICS_PORT`: This defines the port on which the metrics endpoint will be available.

Ensure that these environment variables are set as per your requirements.

For example:

```bash
export ENABLE_METRICS=true
export METRICS_HOST=0.0.0.0
export METRICS_PORT=9100
```

You can also specify them by providing `--enable-metrics`, `--metrics-port` and `--metrics-host` flags to the `start` command.

Now, Operators's metrics will be available at `http://[METRICS_HOST]:[METRICS_PORT]/metrics`.

### Configure Prometheus

To monitor Operator, you will need to configure Prometheus to scrape metrics from the exposed `/metrics` endpoint.

Add the following job configuration in your Prometheus configuration file (`prometheus.yml`):

```yaml
scrape_configs:
  - job_name: 'operator'
    scrape_interval: 30s
    static_configs:
      - targets: [ '<METRICS_HOST>:<METRICS_PORT>' ]
```

Replace `<METRICS_HOST>` and `<METRICS_PORT>` with the values you've set in Operator.

This configuration tells Prometheus to scrape metrics from Operator every 30 seconds.
