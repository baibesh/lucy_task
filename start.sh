docker-compose --env-file=.env up -d
docker exec -it api sh -c "npm run db:migrate; npm run db:seed"
