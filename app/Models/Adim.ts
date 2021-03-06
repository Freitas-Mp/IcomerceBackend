import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Adim extends BaseModel {
  @column({isPrimary:true})
  public id: string

  @column()
  public adimname: string
  @column()
  public password: string
  @column()
  public avatar:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(adim: Adim) {
    if (adim.$dirty.password) {
      adim.password = await Hash.make(adim.password)
    }
  }
}
