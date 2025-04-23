import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Calendar } from "./components/ui/calendar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ProblemaFCApp() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-800">Problema Futebol Clube</h1>

      <Tabs defaultValue="dashboard">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="jogadores">Jogadores</TabsTrigger>
          <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
          <TabsTrigger value="eventos">Eventos</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Desempenho do Time</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={[{ name: 'Jan', gols: 4 }, { name: 'Fev', gols: 6 }, { name: 'Mar', gols: 3 }]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="gols" stroke="#1e40af" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jogadores">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Cadastro de Jogadores</h2>
              <Input placeholder="Nome do jogador" />
              <Input placeholder="Número da camisa" />
              <Input placeholder="Posição" />
              <Button>Salvar</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagamentos">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Mensalidades</h2>
              <Input placeholder="Nome do sócio" />
              <Input placeholder="Valor" type="number" />
              <Button>Pagar com Pix</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eventos">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Calendário de Eventos</h2>
              <Calendar className="mt-2" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}