import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { PermissionsModule } from './permissions/permissions.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { PaymentGatewaysModule } from './payment-gateways/payment-gateways.module';
import { PlansModule } from './plans/plans.module';
import { ShopsModule } from './shops/shops.module';
import { UserPermissionsModule } from './user-permissions/user-permissions.module';
import { LanguagesModule } from './languages/languages.module';
import { PrintersModule } from './printers/printers.module';
import { OrderPlansModule } from './order-plans/order-plans.module';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';
import { CustomersModule } from './customers/customers.module';
import { TablesModule } from './tables/tables.module';
import { TableZonesModule } from './table-zones/table-zones.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionDetailsModule } from './transaction-details/transaction-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: { log: ['query', 'info', 'warn', 'error'] },
      },
    }),
    CategoriesModule,
    PermissionsModule,
    CurrenciesModule,
    PaymentGatewaysModule,
    PlansModule,
    ShopsModule,
    UserPermissionsModule,
    LanguagesModule,
    PrintersModule,
    OrderPlansModule,
    ProductsModule,
    StocksModule,
    CustomersModule,
    TablesModule,
    TableZonesModule,
    TransactionsModule,
    TransactionDetailsModule,
  ],
  controllers: [AppController, CategoriesController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
