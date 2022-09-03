module.exports = class Data1662233768902 {
  name = 'Data1662233768902'

  async up(db) {
    await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_5c85dbbd108d915a13f71de39ad"`)
    await db.query(`ALTER TABLE "token" ALTER COLUMN "contract_id" SET NOT NULL`)
    await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_5c85dbbd108d915a13f71de39ad" FOREIGN KEY ("contract_id") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_5c85dbbd108d915a13f71de39ad" FOREIGN KEY ("contract_id") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "token" ALTER COLUMN "contract_id" DROP NOT NULL`)
    await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_5c85dbbd108d915a13f71de39ad"`)
  }
}
