module.exports = {
  apps: [{
    name: 'archivist',
    script: '/root/agency-socket/scripts/archivist.py',
    interpreter: 'python3',
    cron_restart: '5 16 * * *',   // 00:05 HKT = 16:05 UTC
    watch: false,
    autorestart: false,
    env: {
      PYTHONUNBUFFERED: '1',
      PATH: '/root/.local/bin:/root/.hermes/hermes-agent/venv/bin:/usr/local/bin:/usr/bin:/bin'
    }
  }]
}
